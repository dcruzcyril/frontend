import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private us:ServiceService) { }

  ngOnInit() {
  }
  signIn(){
    this.us.signIn(this.username,this.password);
  }
}
