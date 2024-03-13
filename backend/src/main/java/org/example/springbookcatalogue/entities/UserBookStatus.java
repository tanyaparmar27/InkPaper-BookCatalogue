package org.example.springbookcatalogue.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "User_Book_Status")
public class UserBookStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_status_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Enumerated(EnumType.STRING)
    private BookStatus status;


    public long getId() {
        return user_status_id;
    }

    public void setId(long id) {
        this.user_status_id =id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public BookStatus getStatus() {
        return status;
    }

    public void setStatus(BookStatus status) {
        this.status = status;
    }
}
