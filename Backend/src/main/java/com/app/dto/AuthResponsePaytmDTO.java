package com.app.dto;

import com.app.Entities.BookTicket;
import com.app.Entities.Status;
import com.app.Entities.Train;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponsePaytmDTO {

	private int paymentid;
	private double amount;
	//private String status;
	private BookTicket booking;
	private Train trains;
	
}
