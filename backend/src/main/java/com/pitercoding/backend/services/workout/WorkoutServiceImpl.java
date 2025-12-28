package com.pitercoding.backend.services.workout;

import com.pitercoding.backend.dto.ActivityDTO;
import com.pitercoding.backend.dto.WorkoutDTO;
import com.pitercoding.backend.entity.Activity;
import com.pitercoding.backend.entity.Workout;
import com.pitercoding.backend.repository.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WorkoutServiceImpl implements WorkoutService {

    private final WorkoutRepository workoutRepository;

    public WorkoutDTO postWorkout(WorkoutDTO workoutDTO) {
        Workout workout = new Workout();

        workout.setDate(workoutDTO.getDate());
        workout.setType(workoutDTO.getType());
        workout.setDuration(workoutDTO.getDuration());
        workout.setCaloriesBurned(workoutDTO.getCaloriesBurned());

        return workoutRepository.save(workout).getWorkoutDTO();
    }

    public List<WorkoutDTO> getWorkouts() {
        List<Workout> workouts = workoutRepository.findAll();
        return workouts.stream().map(Workout::getWorkoutDTO).collect(Collectors.toList());
    }
}
