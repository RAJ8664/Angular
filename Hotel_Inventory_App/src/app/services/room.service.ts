import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient : HttpClient) { }

  getRoom() {
    return this.httpClient.get<Room[]>('http://localhost:8080/rooms');
  }
  addRoom(newRoom : Room) {
    return this.httpClient.post<Room>('http://localhost:8080/room', newRoom);
  }
}
