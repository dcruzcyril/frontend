import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  
  email;
  username:String;
  password:String;
  constructor(private us: ServiceService) { }

  ngOnInit() {
  }
  addData() {
    if(this.password.length<10){
      alert('Password Must be atleast 10 Characters long');
    }
    else
    {
      this.us.register(this.email,this.username,this.password);
      alert('Registeration Complete');
    }
    console.log(this.password.length);


  }

   
    // alert(this.password.lenght);
    // console.log(this.name)
}

