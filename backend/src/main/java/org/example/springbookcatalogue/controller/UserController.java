package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;


}
