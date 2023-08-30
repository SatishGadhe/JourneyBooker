package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponseUserDTO {
	private String username;
	//@Email
	private String email;
	private String gender;
	private int age;
	private String mobileno;
	private String resetPasswordToken;
	//@Pattern(regexp = "^.(?=.{8,})(?=..[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=]).$", message = "Password must be atleast 8 charcters contain at least one upper case, one lower case, at least one digit  at least one char within a set of special chars (@#%$^)")
	private String password;
}

//userid": 0,
//"username": "string",
//"resetPasswordToken": "string",
//"email": "string",
//"password": "string",
//"gender": "string",
//"age": 0,
//"mobileno": "string"
