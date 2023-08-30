package com.app.dto;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRespnseTrainDTO {

	private Integer trainid;
	private String trainname;
	private String source;
	private String destination;
	private double ticketprice;
	private long ArrivalTime;
	private long DepartureTime;
	
	
	public long getArrivalTime() {
		return ArrivalTime;
	}
	@SuppressWarnings("static-access")
	public void setArrivalTime(LocalDateTime arrivalTime) {
		ArrivalTime = arrivalTime.now().toEpochSecond(ZoneOffset.UTC);
	}
	public long getDepartureTime() {
		return DepartureTime;
	}
	@SuppressWarnings("static-access")
	public void setDepartureTime(LocalDateTime departureTime) {
		DepartureTime = departureTime.now().toEpochSecond(ZoneOffset.UTC);
	}
	
	
}
