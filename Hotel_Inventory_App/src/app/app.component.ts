import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsTableComponent } from "./rooms-table/rooms-table.component";
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';

interface Room {
  roomNumber: number;
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

  constructor() {}
  ngOnInit() {
    this.rooms = [
      {
        roomNumber: 101,
        roomFloor: 1,
        roomPrice: 100,
        roomType: "Single",
        isBooked: false
      },
      {
        roomNumber: 202,
        roomFloor: 2,
        roomPrice: 150,
        roomType: "Double",
        isBooked: true
      },
      {
        roomNumber: 303,
        roomFloor: 3,
        roomPrice: 200,
        roomType: "Suite",
        isBooked: false
      }
    ];
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
}
