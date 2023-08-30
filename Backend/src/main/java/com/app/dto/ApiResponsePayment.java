package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;

@Getter
public class ApiResponsePayment {

	private String message;
	private LocalDateTime timestramp;
  public ApiResponsePayment(String message) {
		super();
		this.message=message;
     	this.timestramp=LocalDateTime.now();
	}
	}

