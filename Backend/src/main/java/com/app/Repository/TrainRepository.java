package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.Train;

public interface TrainRepository extends JpaRepository<Train, Integer>{

}
