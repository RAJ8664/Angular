import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsTableServiceService {

  EmployeeNames : Array<string> = [];
  constructor() { }
  getEmployeeNames() {
    this.EmployeeNames.push("John", "Jane", "Jim", "Jill");
    return this.EmployeeNames;
  }
}
