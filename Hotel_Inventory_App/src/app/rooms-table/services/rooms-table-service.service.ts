import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Room } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class RoomsTableServiceService {
  EmployeeNames : Array<string> = [];
  
  constructor(private httpClient : HttpClient) { }
  
  ngOnInit() {}

  //Functions;
  getEmployeeNames() {
    this.EmployeeNames.push("John", "Jane", "Jim", "Jill");
    return this.EmployeeNames;
  }
  
  getRoom() {
    return this.httpClient.get<Room[]>('http://localhost:8080/rooms');
  }

  addRoom(newRoom : Room) {
    return this.httpClient.post<Room[]>('http://localhost:8080/room', newRoom);
  }
}
