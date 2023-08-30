package com.app.Service;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.app.Entities.Train;
import com.app.Entities.User;
import com.app.controller.TrainController;
import com.app.dto.AuthRespnseTrainDTO;
import com.app.dto.AuthResponseUserDTO;

public interface TrainService {

	List<Train> getAllTrains();

	Train updatetraindetails(Train detachedtrain);

	
	Train getUserbyid(int trainid);

	Train addtrainDetails(Train transienttrain);

	String deleteUserDetails(int trainid);

	
}
