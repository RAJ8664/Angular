package com.raj.roy.Hotel_Inventory_Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.raj.roy.Hotel_Inventory_Backend.Repository.RoomRepository;

@RestController
public class RoomController {
    
    @Autowired
    private RoomRepository repository;

   
}
