import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsTableServiceService } from './services/rooms-table-service.service';
import { Room } from '../app.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './rooms-table.component.html',
  styleUrl: './rooms-table.component.css'
})

export class RoomsTableComponent {
 rooms: Array<Room> = [];
  @Input() hotelName: string = '';
  @Input() count: number = 0;

  constructor(private roomsTableService : RoomsTableServiceService) {}
  
  ngOnInit() {
    if (this.rooms.length == 0) this.roomsTableService.getRoom().subscribe((current_rooms : Array<Room>) => {
      this.rooms = current_rooms;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      console.log("Count changed: ", changes['count'].currentValue);
    }
    else if (changes['hotelName']) {
      console.log("Hotel name changed: ", changes['hotelName'].currentValue);
    }
  }  
}
