package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.BookTicket;

public interface BookTicketRepository extends JpaRepository<BookTicket, Integer>{

}
