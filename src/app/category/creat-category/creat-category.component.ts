import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryServiceService } from 'src/app/shared/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-category',
  templateUrl: './creat-category.component.html',
  styleUrls: ['./creat-category.component.css']
})
export class CreatCategoryComponent implements OnInit {
imageUrl:string="/assets/Images/cat.png";
selectedFile:File=null;
  constructor(private categoryServ:CategoryServiceService,private router:Router) { }


  ngOnInit() {
    this.resertForm();
  }
  //upload
  // onFileSelected(event)
  // {
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(this.selectedFile);
  // }
  // reset from

  resertForm(from?: NgForm)
  {
    if(from != null) {
    from.resetForm();
    }

    this.categoryServ.formData ={
       CategoryId:null,
       CategoryName:"",
       ImgUrl:"",

 };
  }
  //end of reset form
  //post
  onSubmit(form:NgForm)
{

form.value.imageFile = <File>this.selectedFile;
console.log(form.value);
    this.insertRecord(form);//sent object of employee from form to insert record


}

insertRecord(form:NgForm)//sent object of employee from insertrecord to service
{

  return this.categoryServ.postCategory(form.value).subscribe((res)=>{
    this.router.navigate(['/category']);
  });



}

}
