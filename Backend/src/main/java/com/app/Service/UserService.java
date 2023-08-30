package com.app.Service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.app.Custom_Exception.ErrorHandler;
import com.app.Custom_Exception.UserNotfoundException;
import com.app.Entities.User;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResponse;
import com.app.dto.AuthResponseUserDTO;
import com.app.dto.EmailDto;
import com.app.dto.PasswordDto;

public interface UserService {

	List<User> getAllUsers();

	 User addUserDetails(AuthResponseUserDTO transientUser);

	User getUserbyid(int userid);
	
	String logout(HttpServletResponse res);

	String deleteUserDetails(int userid);

	User updateUserdetails(User detachedUser);
	
	User loginUser(AuthRequest loginDto, HttpServletResponse response,HttpSession session) throws UserNotfoundException;

	String forgotPassword(EmailDto emailDto) throws UserNotfoundException;

	String resetPassword(String token, PasswordDto passwordDto, HttpSession session, HttpServletResponse response)
			throws UserNotfoundException, ErrorHandler;
	

}
