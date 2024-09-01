package com.example.healthmonitoring.controller;

import com.example.healthmonitoring.model.Goal;
import com.example.healthmonitoring.repository.GoalRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class GoalController {
    @Autowired
    private GoalRepository goalRepository;

    @PostMapping("/goals/add")
    public Goal addGoal(@RequestBody Goal goal) {
        return goalRepository.save(goal);
    }
    
    @GetMapping("/goals/all")
    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }
}
