package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.Entities.Train;
import com.app.Entities.User;
import com.app.Service.TrainService;
import com.app.dto.ApiResponseTrain;
import com.app.dto.AuthRespnseTrainDTO;



@RestController
@RequestMapping("/trains")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainController {

	@Autowired
	private TrainService trainservice;
	
	@GetMapping("/findTrains")
	public List<Train> listoftrains(){
		return trainservice.getAllTrains();
	}
	
	@GetMapping("/findAllTrains/{trainid}")
	public Train gettrainbyid(
			@PathVariable @Valid @Min(value = 1,message = "train id >= 1") @Max(value = 100, message = "train id must be < 100") int trainid)
	   {
			System.out.println("in get User details" +trainid);	
			return trainservice.getUserbyid(trainid);
		}
	
	@PostMapping("/AddTrains")
	public ResponseEntity<?> saveTrainDetails(@RequestBody Train transienttrain) {
		System.out.println("in save " + transienttrain.getTicketPrice());// not null , id : null
		return new ResponseEntity<>(trainservice.addtrainDetails(transienttrain), HttpStatus.CREATED);
	} 
	
	@PutMapping("/UpdateTrains")
	public Train updatetrain(@RequestBody Train detachedtrain) {
		return trainservice.updatetraindetails(detachedtrain);
	}
	
	@DeleteMapping("/deletetrain/{trainid}")
	public ApiResponseTrain deletetrain(@PathVariable int trainid) {
		System.out.println("in del train details"+trainid);
		return new ApiResponseTrain(trainservice.deleteUserDetails(trainid));
	}
}
