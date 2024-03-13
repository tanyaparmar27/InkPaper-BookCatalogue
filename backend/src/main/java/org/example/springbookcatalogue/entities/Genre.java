package org.example.springbookcatalogue.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Genre")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long genre_id;
    private String genre_name;

    private String genre_url;

    @OneToMany(mappedBy = "genre",cascade = CascadeType.ALL)
    private List<Book> books;

    public Long getGenre_id() {
        return genre_id;
    }

    public void setGenre_id(Long genre_id) {
        this.genre_id = genre_id;
    }

    public String getGenre_name() {
        return genre_name;
    }

    public void setGenre_name(String genre_name) {
        this.genre_name = genre_name;
    }

    public String getGenre_url() {
        return genre_url;
    }

    public void setGenre_url(String genre_url) {
        this.genre_url = genre_url;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}





