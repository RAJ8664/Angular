package com.raj.roy.Hotel_Inventory_Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.raj.roy.Hotel_Inventory_Backend.Model.Room;
import com.raj.roy.Hotel_Inventory_Backend.Repository.RoomRepository;

@RestController
public class RoomController {
    
    @Autowired
    private RoomRepository repository;

    /*Gets all the rooms from the database*/
    @RequestMapping(method = RequestMethod.GET, path = "/rooms")
    public ResponseEntity<List<Room>> getAllRooms() {
        List<Room> rooms = repository.findAll();
        if (rooms.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    /*Adds a new room to the database*/
    @RequestMapping(method = RequestMethod.POST, path = "/room")
    public ResponseEntity<Room> addRoom(@RequestBody Room newRoom) {
        Room room = repository.save(newRoom);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }

    /*Gets a room by its id*/
    @RequestMapping(method = RequestMethod.GET, path = "/room/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long newId) {
        if (repository.existsById(newId)) {
            return new ResponseEntity<>(repository.findById(newId).get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /*Delete a room by its id*/
    @RequestMapping(method = RequestMethod.DELETE, path = "/room/{id}")
    public ResponseEntity<Room> deleteRoomById(@PathVariable Long newId) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            repository.deleteById(newId);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /*Update roomNumber by RoomId*/
    @RequestMapping(method = RequestMethod.PUT, path = "/room/roomNumber/{id}")
    public ResponseEntity<Room> updateRoomNumberById(@PathVariable Long newId, @RequestBody Room newRoom) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            currentRoom.setRoomNumber(newRoom.getRoomNumber());
            repository.save(currentRoom);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /**Update roomFloor by RoomId*/
    @RequestMapping(method = RequestMethod.PUT, path = "/room/roomFloor/{id}")
    public ResponseEntity<Room> updateRoomFloorById(@PathVariable Long newId, @RequestBody Room newRoom) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            currentRoom.setRoomFloor(newRoom.getRoomFloor());
            repository.save(currentRoom);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /*Update roomType by RoomId*/
    @RequestMapping(method = RequestMethod.PUT, path = "/room/roomType/{id}")
    public ResponseEntity<Room> updateRoomTypeById(@PathVariable Long newId, @RequestBody Room newRoom) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            currentRoom.setRoomType(newRoom.getRoomType());
            repository.save(currentRoom);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }   

    /*Update roomPrice by RoomId*/
    @RequestMapping(method = RequestMethod.PUT, path = "/room/roomPrice/{id}")
    public ResponseEntity<Room> updateRoomPriceById(@PathVariable Long newId, @RequestBody Room newRoom) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            currentRoom.setRoomPrice(newRoom.getRoomPrice());
            repository.save(currentRoom);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /*Update roomStatus by RoomId*/
    @RequestMapping(method = RequestMethod.PUT, path = "/room/roomStatus/{id}")
    public ResponseEntity<Room> updateRoomStatusById(@PathVariable Long newId, @RequestBody Room newRoom) {
        if (repository.existsById(newId)) {
            Room currentRoom = repository.findById(newId).get();
            currentRoom.setIsBooked(newRoom.getIsBooked());
            repository.save(currentRoom);
            return new ResponseEntity<>(currentRoom, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
