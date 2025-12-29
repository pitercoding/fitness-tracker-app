package com.pitercoding.backend.services.goal;

import com.pitercoding.backend.dto.GoalDTO;

public interface GoalService {

    GoalDTO postGoal(GoalDTO goalDTO);
}
