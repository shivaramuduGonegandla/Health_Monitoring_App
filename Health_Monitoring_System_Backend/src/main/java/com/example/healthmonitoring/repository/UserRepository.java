package com.example.healthmonitoring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.healthmonitoring.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String username);
}
