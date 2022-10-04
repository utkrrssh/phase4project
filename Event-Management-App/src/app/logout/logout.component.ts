import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../shared/hardcoded-authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    alert("Logged Out");
    this.hardcodedAuthenticationService.logout();
    
  }

}