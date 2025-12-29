package com.pitercoding.backend.controller;

import com.pitercoding.backend.dto.GoalDTO;
import com.pitercoding.backend.services.goal.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class GoalController {

    private final GoalService goalService;

    @PostMapping("/goal")
    public ResponseEntity<?> postGoal(@RequestBody GoalDTO goalDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(goalService.postGoal(goalDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
