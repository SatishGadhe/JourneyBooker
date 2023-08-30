package com.app.Service;

import java.util.List;

import com.app.Entities.BookTicket;

public interface BookTicketService {

	List<BookTicket> getalltickets();

	BookTicket addtickets(BookTicket transientticket);

	BookTicket updatetickets(BookTicket detachedticket);

	String deleteticket(int ticketid);

	



	

}
