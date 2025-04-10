import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';
import { HttpClient } from '@angular/common/http';
import { Room } from '../app.component';
import { RoomsTableComponent } from "../rooms-table/rooms-table.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-homepage',
  imports: [RoomsTableComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = ''; //we will fetch it from backend;
  isLoggedIn: boolean = false;
  hotelName = "Hotel Plaza";
  hotelNames : Array<string> = ["Hotel Plaza", "Hotel New York", "Hotel Los Angeles"];
  count : number = 0;

  constructor(private roomService : RoomService, private httpClient : HttpClient) {}
  ngOnInit() {  
    this.httpClient.get<string>('http://localhost:8080/name/getTitle', {responseType : 'text' as 'json'}).subscribe(current => {
      this.title = current;
    })
  }

  /*Functions*/
  change_hotel_name(): void {
    this.hotelName = this.hotelNames[Math.floor(Math.random() * this.hotelNames.length)];
  }
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  increment_count(): void {
    this.count = this.count + 1;
  }
}
