import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from './services/room.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

export interface Room {
  roomId ?: number,
  roomNumber ?: number;
  roomFloor: number;
  roomPrice: number;
  roomType: string;
  isBooked: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  rooms: Array<Room> = [];
  title = "Hotel_Inventory_App";
  
  constructor(private roomService : RoomService, private router : Router) {}
  
  ngOnInit() {}


  goToRoomsTable() {
    //perform some logic;
    this.router.navigate(['/rooms_table']);
  }
  goToHomePage() {
    this.router.navigate(['/homepage']);
  }

}
