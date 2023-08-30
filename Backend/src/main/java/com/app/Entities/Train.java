package com.app.Entities;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
@Table(name = "train")
public class Train {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer trainid;

	@Column(name = "trainname", length = 30, nullable = false, unique = true)
	private String trainname;

	@Column(name = "source", length = 30, nullable = false, unique = true)
	private String source;

	@Column(name = "destination", length = 30, nullable = false, unique = true)
	private String destination;

	@Column(name = "ticketprice",nullable = false)
	private double ticketPrice;
	
	@Column(nullable = false)
	private int trainNo;
	
	@Column(nullable = false)
	private LocalDateTime ArrivalTime;
//	private LocalTime ArrivalTime;
	
	@Column(nullable = false)
	private LocalDateTime DepartureTime;
//	private LocalTime DepartureTime;
	
	
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY) // Change this iff you want to lift admin details along with Train
	@JoinColumn(name = "admin_id") // not null constraint added on FK column
	private Admin myadmin;
	
	

	@JsonIgnore
	  @OneToMany(mappedBy = "train", fetch = FetchType.EAGER,cascade =
	  CascadeType.ALL, orphanRemoval = true)
	  private List<BookTicket> ticketlist=new ArrayList<>();
	  
//	  @OneToMany(mappedBy = "user", fetch = FetchType.EAGER,cascade =
//	  CascadeType.ALL, orphanRemoval = true) 
//	  private List<User> userlist=new ArrayList<>();
	  
	  

}
