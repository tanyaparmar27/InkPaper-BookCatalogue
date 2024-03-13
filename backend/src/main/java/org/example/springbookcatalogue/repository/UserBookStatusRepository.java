package org.example.springbookcatalogue.repository;
import org.example.springbookcatalogue.entities.UserBookStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBookStatusRepository extends JpaRepository<UserBookStatus,Long> {
}
