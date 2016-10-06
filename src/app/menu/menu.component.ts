import { Component, OnInit } from '@angular/core';

import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    name;
    errorMessage;

  constructor(private userDetailsService : UserDetailsService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(){
    this.userDetailsService.getUserDetails()
      .subscribe(
        userName => {
          if(userName.includes('html')) {
            this.name = 'TEST USER';
          }else {
            this.name = userName;
          }
        },
        error => {
          this.errorMessage = <any>error;
          console.log('Error occured while getting name ' + this.errorMessage);
        } 
      );
  }

}
