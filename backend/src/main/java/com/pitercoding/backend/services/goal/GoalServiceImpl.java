package com.pitercoding.backend.services.goal;

import com.pitercoding.backend.dto.GoalDTO;
import com.pitercoding.backend.entity.Goal;
import com.pitercoding.backend.repository.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalServiceImpl implements GoalService{
    private final GoalRepository goalRepository;

    public GoalDTO postGoal(GoalDTO goalDTO) {
        Goal goal = new Goal();

        goal.setDescription(goalDTO.getDescription());
        goal.setStartDate(goalDTO.getStartDate());
        goal.setEndDate(goalDTO.getEndDate());
        goal.setAchieved(false);

        return goalRepository.save(goal).getGoalDTO();
    }
}
