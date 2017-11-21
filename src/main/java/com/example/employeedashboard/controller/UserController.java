package com.example.employeedashboard.controller;

import com.example.employeedashboard.model.User;
import com.example.employeedashboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    // Get all users in user table
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findOne(userId);
        if(user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user);
    }

    // Log user in with username and password
    @PostMapping("/user/login")
    public ResponseEntity<User> getUserByUsernamePassword(@Valid @RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        User result = userRepository.findByUsernameAndPassword(username, password);

        // Check if user exists
        if(result == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(result);
    }

    // Create new user
    @PostMapping("/user")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User userExist = userRepository.findByUsername(user.getUsername());
        System.out.print(userExist);

        // Check if user exists
        if(userExist == null) {
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    // Update user information with id
    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
                                               @Valid @RequestBody User userDetails) {
        User user = userRepository.findOne(userId);

        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    // delete user with id
    @DeleteMapping("/user/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findOne(userId);
        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }
}
