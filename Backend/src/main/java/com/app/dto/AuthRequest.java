package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {

	@Email
	@NotBlank(message = "Email cant be blank")
	private String email;
	@NotBlank(message = "Password cant be blank")
//	@Pattern(regexp = "^.(?=.{8,})(?=..[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=]).$", message = "Password must be atleast 8 charcters contain at least one upper case, one lower case, at least one digit  at least one char within a set of special chars (@#%$^)")
	private String Password;
}
