package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.entities.Genre;
import org.example.springbookcatalogue.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class GenreController {

    @Autowired
    private GenreRepository genreRepository;

    //post genre to database
    @PostMapping("/genres")
    public Genre createGenre(@RequestBody Genre genre){
        return genreRepository.save(genre);
    }

    //get genres from database
    @GetMapping("/genres")
    public List<Genre> getAllGenres(){
        return genreRepository.findAll();
    }

}