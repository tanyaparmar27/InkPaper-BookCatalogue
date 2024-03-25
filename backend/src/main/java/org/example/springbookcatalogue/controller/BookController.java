package org.example.springbookcatalogue.controller;

import org.example.springbookcatalogue.entities.Book;
import org.example.springbookcatalogue.entities.Genre;
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
    public ResponseEntity<Book> updateBook(@PathVariable long bookId, @RequestBody Book updatedBook) {
        Book existingBook = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + bookId));

        if(updatedBook.getBook_name() != null){
            existingBook.setBook_name(updatedBook.getBook_name());
        }
        if(updatedBook.getBook_author() != null){
            existingBook.setBook_author(updatedBook.getBook_author());
        }
        if(updatedBook.getGenre() != null){
            existingBook.setGenre(updatedBook.getGenre());
        }
        if(updatedBook.getBook_published_date() != null){
            existingBook.setBook_published_date(updatedBook.getBook_published_date());
        }
        if(updatedBook.getBook_description() != null){
            existingBook.setBook_description(updatedBook.getBook_description());
        }
        if(updatedBook.getBook_url() != null){
            existingBook.setBook_url(updatedBook.getBook_url());
        }
        if(updatedBook.getBook_status() != null){
            existingBook.setBook_status(updatedBook.getBook_status());
        }


        final Book updatedBookEntity = bookRepository.save(existingBook);
        return ResponseEntity.ok(updatedBookEntity);
    }

    @GetMapping("/books/status/{status}")
    public List<Book> findBooksByBookStatus(@PathVariable String status){
        return bookRepository.findBooksByBookStatus(status);
    }

    @DeleteMapping("books/{bookId}")
    public void deleteBook(@PathVariable long bookId){
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id " + bookId));

        bookRepository.delete(book);
        System.out.println("book deleted");
    }
}
