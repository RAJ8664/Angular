package com.raj.roy.Hotel_Inventory_Backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NamesController {
    
    @RequestMapping(method = RequestMethod.GET, path = "/name/getTitle")
    public String getTitle() {
        return "Hotel Paradise";
    }
    
}
