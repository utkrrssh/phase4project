import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../shared/hardcoded-authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Admin';
  password = '';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  
  //Router
  //Angular.giveMeRouter()
  //Dependency Injection


  handleLogin()
  {
    //console.log(this.username);
  
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      //Redirect to Welcome Page
      alert("LoggedIn Successfull")
      this.router.navigate(['dashboard',this.username]);
      this.invalidLogin =false;
    }
    else{
      this.invalidLogin = true;
  }
    
  }
  constructor(private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit() {
  }

}