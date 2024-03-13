package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.entities.Book;
import org.example.springbookcatalogue.exceptions.ResourceNotFoundException;
import org.example.springbookcatalogue.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/book")
    public Book insertBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/book/{book_id}")
    public ResponseEntity<Book> getBookById(@PathVariable(value = "book_id") long book_id){
        Book book = bookRepository.findById(book_id).orElseThrow(
                ()-> new ResourceNotFoundException("book does not exist with id " + book_id)
        );
        return ResponseEntity.ok(book);
    }

    @GetMapping("/books/{genre_id}")
    public List<Book> getBooksByGenre(@PathVariable("genre_id")Long genre_id) {
        return bookRepository.findBookByGenre(genre_id);
    }

}
