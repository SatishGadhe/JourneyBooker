package com.app.Service;

import java.util.List;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Custom_Exception.ResourceNotFoundException;
import com.app.Entities.Train;
import com.app.Repository.TrainRepository;
import com.app.dto.AuthRespnseTrainDTO;

@Service
@Transactional
public class TrainServiceImpl implements TrainService{

	@Autowired
	private TrainRepository trainrepo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public List<Train> getAllTrains() {
		System.out.println("get trains..");
		return trainrepo.findAll();
	}


	@Override
	public Train updatetraindetails(Train detachedtrain) {
		String msg="Invalid train id can't be deleted!";
		if(trainrepo.existsById(detachedtrain.getTrainid()))
		{
		 msg="id with"+detachedtrain.getTrainid()+"updated!";
		}
		return trainrepo.save(detachedtrain);
	}


	@Override
	public Train getUserbyid(int trainid) {
		return trainrepo.findById(trainid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid train id, can't get train Details!!!"));
	}


	@Override
	public Train addtrainDetails(Train transienttrain) {
//			Train t = mapper.map(transienttrain, Train.class);
			return trainrepo.save(transienttrain);
		}



	@Override
	public String deleteUserDetails(int trainid) {
		String msg = "train id is Invalid!, can't be deleted!";
		if (trainrepo.existsById(trainid)) {
			trainrepo.deleteById(trainid);
			msg = "train with id=" + trainid + " deleted!";
		}
		return msg;
	}

	
}
