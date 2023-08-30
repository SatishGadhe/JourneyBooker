package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthRequestUserDTO {

	@NotBlank(message = "Email can't be blank!!")
	@Email(message = "Invalid Email!!")
	private String email;
	@NotBlank(message = "Password should not be Blank!!")
	private String Password;
}
