import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }
  addData(email,username,password) {
      const obj = {email,username,password};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }

  getData() {
      return(
      this
          .http
          .get(`${this.url}/view`)
      );
  }
 
  upData(id, username) {
      const obj = { username };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(email,username,password, id) {
 
      const obj = {
          email:email,
          username: username,
          password: password,
          
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    signIn(email,password){
      const obj = {email, password};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{

            this.router.navigateByUrl(`/dashboard/${res._id}`);
          }
        });
    }
    getDataById(id){
      return this
        .http
        .get(`${this.url}/getbyid/${id}`);
    }
    
  register(email,name,password) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {email,name,password};
      this
          .http
          .post(`${this.url}/gggg`, obj)
          .subscribe(res => console.log(res));
  }
}