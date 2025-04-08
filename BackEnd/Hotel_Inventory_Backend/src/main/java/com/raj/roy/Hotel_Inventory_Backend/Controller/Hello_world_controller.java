package com.raj.roy.Hotel_Inventory_Backend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello_world_controller {
    
    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello World";
    }
}
