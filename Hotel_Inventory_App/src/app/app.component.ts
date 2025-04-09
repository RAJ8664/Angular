import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsTableComponent } from "./rooms-table/rooms-table.component";
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { RoomService } from './services/room.service';

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
  imports: [CommonModule, RoomsTableComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ''; //we will fetch it from backend;
  hotelName = "Hotel Plaza";
  isLoggedIn: boolean = false;
  rooms : Array<Room> = [];
  count : number = 0; 
  hotelNames : Array<string> = ["Hotel Plaza", "Hotel New York", "Hotel Los Angeles"];
  
  private httpClient = inject(HttpClient);

  constructor(private roomService : RoomService) {}
  
  ngOnInit() {  
    this.roomService.getRoom().subscribe(current_rooms => {
      this.rooms = current_rooms;
    })
    
    this.httpClient.get<string>('http://localhost:8080/name/getTitle', {responseType : 'text' as 'json'}).subscribe(current => {
      this.title = current;
    })
  
  }
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  increment_count(): void {
    this.count = this.count + 1;
  }
  change_hotel_name(): void {
    this.hotelName = this.hotelNames[Math.floor(Math.random() * this.hotelNames.length)];
  }
  addRoom(): void {
    /*Todo : 
    - get the room number from the user
    - get the room floor from the user
    - get the room price from the user
    - get the room type from the user
    - get the isBooked from the user
    
      using FormsModule
    */

    const newRoom : Room = {
      roomFloor: 3,
      roomPrice: 200,
      roomType: "Single",
      isBooked: false
    }
    this.roomService.addRoom(newRoom).subscribe((response) => {
      this.rooms = [...this.rooms, newRoom];
    })
  }
}
