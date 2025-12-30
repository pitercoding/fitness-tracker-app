package com.pitercoding.backend.services.stats;

import com.pitercoding.backend.dto.GraphDTO;
import com.pitercoding.backend.dto.StatsDTO;

public interface StatsService {
    StatsDTO getStats();
    GraphDTO getGraphStats();
}
