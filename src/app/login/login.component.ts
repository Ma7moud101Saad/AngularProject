import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected userServ:UserServiceService,private route:Router) { }
isLoginError:boolean=false;
  ngOnInit() {
    this.resertForm();
  }
  resertForm(from?: NgForm)
  {
    if(from != null) {
    from.resetForm();
    }

    this.userServ.formData ={
       Name:"",
       Email:"",
       Password:"",
       ConfirmPassword:""
 };

  }

  onSubmit(form:NgForm)
  {
    console.log(form.value.Name);
    console.log(form.value.Password);
    this.userServ.userAuthentication(form.value.Name,form.value.Password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.route.navigate(['/Home']);

    },

    (err:HttpErrorResponse)=>{
        this.isLoginError = true;
    });


  }



}
