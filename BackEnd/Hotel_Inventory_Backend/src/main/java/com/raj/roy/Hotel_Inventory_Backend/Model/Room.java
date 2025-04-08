package com.raj.roy.Hotel_Inventory_Backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomNumber;
    private Long roomFloor;
    private Long roomPrice;
    private String roomType;
    private Boolean isBooked;

    public Room() {}
    public Room(long roomNumber, long roomFloor, long roomPrice, String roomType, Boolean isBooked) {
        this.roomNumber = roomNumber;
        this.roomFloor = roomFloor;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
        this.isBooked = isBooked;
    }

    public Long getRoomNumber() {
        return roomNumber;
    }

    public Long getRoomFloor() {
        return roomFloor;
    }

    public Long getRoomPrice() {
        return roomPrice;
    }
    
    public String getRoomType() {
        return roomType;
    }

    public Boolean getIsBooked() {
        return isBooked;
    }

    public void setRoomNumber(Long roomNumber) {
        this.roomNumber = roomNumber;
    }
    
    public void setRoomFloor(Long roomFloor) {
        this.roomFloor = roomFloor;
    }

    public void setRoomPrice(Long roomPrice) {
        this.roomPrice = roomPrice;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
    
    public void setIsBooked(Boolean isBooked) {
        this.isBooked = isBooked;
    }      

    @Override   
    public String toString() {
        return "Room [roomNumber=" + roomNumber + ", roomFloor=" + roomFloor + ", roomPrice=" + roomPrice + ", roomType="
                + roomType + ", isBooked=" + isBooked + "]";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Room current_room = (Room) obj;
        return current_room.roomNumber == roomNumber && current_room.roomFloor == roomFloor && current_room.roomPrice == roomPrice && current_room.roomType.equals(roomType) && current_room.isBooked == isBooked;
    }
}

