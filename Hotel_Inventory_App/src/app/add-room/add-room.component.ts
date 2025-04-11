import { Component } from '@angular/core';
import { Room } from '../app.component';
import { FormsModule } from '@angular/forms';
import { RoomsTableComponent } from '../rooms-table/rooms-table.component';
import { RoomsTableServiceService } from '../rooms-table/services/rooms-table-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-room',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {
  success_message : string = '';
  current_room : Room = {
    roomFloor : 0,
    roomPrice : 0,
    roomType : 'Single',
    isBooked : false
  }
  constructor(private roomService : RoomsTableServiceService) {}

  addRoom() {
    this.roomService.addRoom(this.current_room).subscribe((data) => this.success_message = "ROOMS ADDED SUCCESSFULLY");
  }
}
