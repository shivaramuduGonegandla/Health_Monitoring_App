package com.example.healthmonitoring.repository;

import com.example.healthmonitoring.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}
