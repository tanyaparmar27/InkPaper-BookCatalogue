package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.entities.Book;
import org.example.springbookcatalogue.exceptions.ResourceNotFoundException;
import org.example.springbookcatalogue.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/books")
    public Book insertBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/books/{book_id}")
    public ResponseEntity<Book> getBookById(@PathVariable(value = "book_id") long book_id){
        Book book = bookRepository.findById(book_id).orElseThrow(
                ()-> new ResourceNotFoundException("book does not exist with id " + book_id)
        );
        return ResponseEntity.ok(book);
    }

    @GetMapping("/genres/books/{genre_id}")
    public List<Book> getBooksByGenre(@PathVariable("genre_id")Long genre_id) {
        return bookRepository.findBookByGenre(genre_id);
    }

    @PatchMapping("/books/{bookId}")
    public ResponseEntity<Book> updateBookStatus(@PathVariable long bookId, @RequestBody Book updatedBook) {
        Book existingBook = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + bookId));

        existingBook.setBook_status(updatedBook.getBook_status());

        final Book updatedBookEntity = bookRepository.save(existingBook);
        return ResponseEntity.ok(updatedBookEntity);
    }

    @GetMapping("/books/status/{status}")
    public List<Book> findBooksByBookStatus(@PathVariable String status){
        return bookRepository.findBooksByBookStatus(status);
    }
}
