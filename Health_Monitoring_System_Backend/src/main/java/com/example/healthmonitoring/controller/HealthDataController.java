package com.example.healthmonitoring.controller;

import com.example.healthmonitoring.model.HealthData;
import com.example.healthmonitoring.repository.HealthDataRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class HealthDataController {
    @Autowired
    private HealthDataRepository healthDataRepository;

    @PostMapping("/healthdata/add")
    public HealthData addHealthData(@RequestBody HealthData healthData) {
        return healthDataRepository.save(healthData);
    }
    
    @GetMapping("/healthdata/all")
    public List<HealthData> getAllHealthData() {
        return healthDataRepository.findAll();
    }
}
