import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    
  }

  ngOnInit() {
  }

  displayOptions: boolean = false;

  displayUserOptions() {
    this.displayOptions = !this.displayOptions;
  }

  logout() {
    this.authenticationService.logout()
  }
}
