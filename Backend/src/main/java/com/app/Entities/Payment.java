package com.app.Entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer paymentid;
	
	@Column(name = "amount",nullable = false)
	private double amount;
	
//	@Column(name = "Paymentstatus",length = 40)
//	private Status status;

	@JsonIgnore
	@OneToMany(mappedBy = "payment",
			cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
	private List<BookTicket> ticketlist=new ArrayList<>();
	
	  
	 
}
