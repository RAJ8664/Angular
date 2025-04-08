import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsTableServiceService } from './services/rooms-table-service.service';

interface Room {
  roomNumber: number;
  roomFloor: number;
  roomPrice: number;
  roomType: string;
  isBooked: boolean;
}

@Component({
  selector: 'app-rooms-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-table.component.html',
  styleUrl: './rooms-table.component.css'
})
export class RoomsTableComponent {
  @Input() rooms: Array<Room> = [];
  @Input() hotelName: string = '';
  @Input() count: number = 0;

  //for the purpose of dependency injection check the service file;
  EmployeeNames : Array<string> = [];
  constructor(private roomsTableService : RoomsTableServiceService) {
    this.EmployeeNames = this.roomsTableService.getEmployeeNames(); 
  }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      console.log("Count changed: ", changes['count'].currentValue);
    }
    else if (changes['rooms']) {
      console.log("Rooms changed: ", changes['rooms'].currentValue);
    }
    else if (changes['hotelName']) {
      console.log("Hotel name changed: ", changes['hotelName'].currentValue);
    }
  }  
}
