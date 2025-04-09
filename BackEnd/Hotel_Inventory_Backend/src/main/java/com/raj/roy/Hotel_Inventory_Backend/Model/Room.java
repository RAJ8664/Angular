package com.raj.roy.Hotel_Inventory_Backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long roomId;
    private Long roomNumber;
    private Long roomFloor;
    private Long roomPrice;
    private String roomType;
    @Column(columnDefinition = "TINYINT(1)")
    private Boolean isBooked;

    public Room() {}
    public Room(long roomId, long roomNumber, long roomFloor, long roomPrice, String roomType, Boolean isBooked) {
        this.roomId = roomId;
        this.roomNumber = roomNumber;
        this.roomFloor = roomFloor;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
        this.isBooked = isBooked;
    }
    public Long getRoomId() {
        return roomId;
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

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    @Override   
    public String toString() {
        return "Room [roomId=" + roomId + ", roomNumber=" + roomNumber + ", roomFloor=" + roomFloor + ", roomPrice="
                + roomPrice + ", roomType=" + roomType + ", isBooked=" + isBooked + "]";
    }
}

