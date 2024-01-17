// user-details.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})  
export class UserDetailsComponent implements OnInit {
  constructor() { }
  user:any = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password:'123456'
  };
  ngOnInit(): void {
    
  }

  onDelete() {
    if (this.user) {
      console.log('User deleted:', this.user.name);
      this.user = null;
    }
  }
}
