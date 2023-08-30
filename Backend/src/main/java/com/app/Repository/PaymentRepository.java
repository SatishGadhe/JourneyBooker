package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.Payment;
import com.app.dto.AuthResponsePaytmDTO;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

	AuthResponsePaytmDTO save(AuthResponsePaytmDTO transientpayment);

}
