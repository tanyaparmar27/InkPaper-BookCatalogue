package org.example.springbookcatalogue.repository;
import org.example.springbookcatalogue.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

    @Query("select g from Book g where g.genre.genre_id = ?1")
    List<Book> findBookByGenre(@Param("id")Long id);


}

