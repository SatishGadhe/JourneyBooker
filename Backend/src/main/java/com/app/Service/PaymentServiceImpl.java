package com.app.Service;

import java.util.List;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Custom_Exception.ResourceNotFoundException;
import com.app.Entities.BookTicket;
import com.app.Entities.Payment;
import com.app.Repository.PaymentRepository;
import com.app.dto.ApiResponsePayment;
import com.app.dto.AuthResponsePaytmDTO;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentrepo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public List<Payment> getallpaymentdetails() {
		
		return paymentrepo.findAll();
		//this.finalamount(paymentid);
	}

	@Override
	public Payment getpaymentdetailsbyid(int paymentid) {
		
		return paymentrepo.findById(paymentid)
			.orElseThrow(()->new ResourceNotFoundException("invalid paymentid cant get payment details"));
		
		
	}

	@Override
	public String deletepaymentdetails(int paymentid) {
		String msg = "payment id is Invalid!, can't be deleted!";
		if(paymentrepo.existsById(paymentid)) {
			paymentrepo.deleteById(paymentid);
			msg="payment details deleted";
		}
		return msg;
	}

	@Override
	public AuthResponsePaytmDTO addpaymentdetails(AuthResponsePaytmDTO transientpayment) {
		return paymentrepo.save(transientpayment);
		
	}

	
	
	
}
