package com.example.healthmonitoring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.healthmonitoring.model.User;
import com.example.healthmonitoring.repository.UserRepository;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users/{username}")
	public User getUser(@PathVariable String username) {
		
		return userRepository.findByUserName(username);
	}
}
