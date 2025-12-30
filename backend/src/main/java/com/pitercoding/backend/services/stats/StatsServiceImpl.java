package com.pitercoding.backend.services.stats;

import com.pitercoding.backend.dto.GraphDTO;
import com.pitercoding.backend.dto.StatsDTO;
import com.pitercoding.backend.entity.Activity;
import com.pitercoding.backend.entity.Workout;
import com.pitercoding.backend.repository.ActivityRepository;
import com.pitercoding.backend.repository.GoalRepository;
import com.pitercoding.backend.repository.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StatsServiceImpl implements StatsService {

    private final GoalRepository goalRepository;
    private final ActivityRepository activityRepository;
    private final WorkoutRepository workoutRepository;

    public StatsDTO getStats() {
        // Goals //
        Long achievedGoals = goalRepository.countAchievedGoals();
        Long notAchievedGoals = goalRepository.countNotAchievedGoals();

        // Activities //
        Integer totalSteps = activityRepository.getTotalSteps();
        Double totalDistance = activityRepository.getTotalDistance();
        Integer totalActivityCaloriesBurned = activityRepository.getTotalActivityCaloriesBurned();

        // Workouts //
        Integer totalWorkoutDuration = workoutRepository.getTotalWorkoutDuration();
        Integer totalWorkoutCaloriesBurned = workoutRepository.getTotalWorkoutCaloriesBurned();

        // Total Calories Sum //
        int totalCaloriesBurned = (totalActivityCaloriesBurned != null ? totalActivityCaloriesBurned : 0) +
                (totalWorkoutCaloriesBurned != null ? totalWorkoutCaloriesBurned : 0);

        // Assembling DTO //
        StatsDTO statsDTO = new StatsDTO();
        statsDTO.setAchievedGoals(achievedGoals != null ? achievedGoals : 0);
        statsDTO.setNotAchievedGoals(notAchievedGoals != null ? notAchievedGoals : 0);

        statsDTO.setSteps(totalSteps != null ? totalSteps : 0);
        statsDTO.setDistance(totalDistance != null ? totalDistance : 0);
        statsDTO.setTotalCaloriesBurned(totalCaloriesBurned);

        statsDTO.setDuration(totalWorkoutDuration != null ? totalWorkoutDuration : 0);

        return statsDTO;
    }

    public GraphDTO getGraphStats() {
        Pageable pageable = PageRequest.of(0, 7);

        List<Workout> workouts = workoutRepository.findLast7Workouts(pageable);
        List<Activity> activities = activityRepository.findLast7Activities(pageable);

        GraphDTO graphDTO = new GraphDTO();
        graphDTO.setWorkouts(workouts.stream().map(Workout::getWorkoutDTO).collect(Collectors.toList()));
        graphDTO.setActivities(activities.stream().map(Activity::getActivityDTO).collect(Collectors.toList()));

        return graphDTO;
    }
}
