package com.raj.roy.Hotel_Inventory_Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.raj.roy.Hotel_Inventory_Backend.Model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{
    
}
