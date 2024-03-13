package org.example.springbookcatalogue.repository;
import org.example.springbookcatalogue.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
