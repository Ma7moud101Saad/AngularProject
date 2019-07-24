import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  constructor(protected userServ:UserServiceService) { }

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

      this.insertRecord(form);//sent object of employee from form to insert record


  }

  insertRecord(form:NgForm)//sent object of employee from insertrecord to service
  {
    return this.userServ.postUser(form.value).subscribe((res)=>{

      this.resertForm(form)

    });


  }

}
