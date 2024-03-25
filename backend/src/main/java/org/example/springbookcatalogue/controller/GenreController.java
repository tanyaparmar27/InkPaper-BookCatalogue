package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.entities.Genre;
import org.example.springbookcatalogue.exceptions.ResourceNotFoundException;
import org.example.springbookcatalogue.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PatchMapping("/genres/{genreId}")
    public ResponseEntity<Genre> updateGenre(@PathVariable Long genreId, @RequestBody Genre updatedGenre) {
        Genre existingGenre = genreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not found with id " + genreId));

        if (updatedGenre.getGenre_url() != null) {
            existingGenre.setGenre_url(updatedGenre.getGenre_url());
        }
        if (updatedGenre.getGenre_name() != null) {
            existingGenre.setGenre_name(updatedGenre.getGenre_name());
        }

        final Genre updatedGenreEntity = genreRepository.save(existingGenre);
        return ResponseEntity.ok(updatedGenreEntity);
    }

    @DeleteMapping("genres/{genreId}")
    public void deleteGenre(@PathVariable long genreId){
        Genre genre = genreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not found with id " + genreId));

        genreRepository.delete(genre);
        System.out.println("genre deleted");
    }


}