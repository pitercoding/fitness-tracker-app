package com.pitercoding.backend.services.activity;

import com.pitercoding.backend.dto.ActivityDTO;

import java.util.List;

public interface ActivityService {

    ActivityDTO postActivity(ActivityDTO dto);
    List<ActivityDTO> getActivities();
}
