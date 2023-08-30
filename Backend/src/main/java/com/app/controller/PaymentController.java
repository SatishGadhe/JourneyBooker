package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entities.Payment;
import com.app.Service.PaymentService;
import com.app.Service.PaymentServiceImpl;
import com.app.dto.ApiResponsePayment;
import com.app.dto.AuthResponsePaytmDTO;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
	
	@Autowired
	private PaymentService paymentservice;
	
	@GetMapping("/findAllPayments")
	public List<Payment> getallpayment(){
		return paymentservice.getallpaymentdetails();
	}
	
	@GetMapping("/findAllPayments/{paymentid}")
	public Payment getpaymentbyid(@PathVariable int Paymentid) {
		System.out.println("in get payment details" +Paymentid);	
		return paymentservice.getpaymentdetailsbyid(Paymentid);
	}
	
	@PostMapping("/addPayment")
	public ResponseEntity<?> addpayments(@RequestBody AuthResponsePaytmDTO transientpayment){
		System.out.println("in save"+transientpayment);
		return new ResponseEntity<>(paymentservice.addpaymentdetails(transientpayment), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletepayment/{paymentid}")
	public ApiResponsePayment deletepaymentwithid(@PathVariable int paymentid) {
		return new ApiResponsePayment(paymentservice.deletepaymentdetails(paymentid));
	}
}
