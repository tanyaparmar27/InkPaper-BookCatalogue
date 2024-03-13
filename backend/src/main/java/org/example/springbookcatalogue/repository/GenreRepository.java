package org.example.springbookcatalogue.repository;

import org.example.springbookcatalogue.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre,Long> {
}
