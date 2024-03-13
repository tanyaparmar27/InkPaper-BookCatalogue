package org.example.springbookcatalogue.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;

    private String user_name;
    private String user_password;
    private String user_email;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<UserBookStatus> userBookStatuses;

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public List<UserBookStatus> getUserBookStatuses() {
        return userBookStatuses;
    }

    public void setUserBookStatuses(List<UserBookStatus> userBookStatuses) {
        this.userBookStatuses = userBookStatuses;
    }
}


