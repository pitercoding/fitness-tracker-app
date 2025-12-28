package com.pitercoding.backend.controller;

import com.pitercoding.backend.dto.WorkoutDTO;
import com.pitercoding.backend.services.workout.WorkoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class WorkoutController {

    private final WorkoutService workoutService;

    @PostMapping("/workout")
    public ResponseEntity<?> postWorkout(@RequestBody WorkoutDTO workoutDTO) {
        try {
            return ResponseEntity.ok(workoutService.postWorkout(workoutDTO));
        } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create workout. Please try again later.");
        }
    }

    @GetMapping("/workouts")
    public ResponseEntity<?> getWorkouts() {
        try {
            return ResponseEntity.ok(workoutService.getWorkouts());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to fetch all workouts. Please try again later.");
        }
    }
}
