package com.example.healthmonitoring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.healthmonitoring.model.HealthData;

public interface HealthDataRepository extends JpaRepository<HealthData, Long> {

}
