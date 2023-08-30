package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResponceTicket {

	private String message;
	private LocalDateTime timestramp;
	public ApiResponceTicket(String message) {
		super();
		this.message=message;
		this.timestramp=LocalDateTime.now();
	}
}
