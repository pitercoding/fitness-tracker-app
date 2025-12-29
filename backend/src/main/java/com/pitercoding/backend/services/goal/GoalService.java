package com.pitercoding.backend.services.goal;

import com.pitercoding.backend.dto.GoalDTO;

import java.util.List;

public interface GoalService {

    GoalDTO postGoal(GoalDTO goalDTO);
    List<GoalDTO> getGoals();
    GoalDTO updateGoalStatus(Long id);
}
