import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/shared/product-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryServiceService } from 'src/app/shared/category-service.service';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private route:Router,private productServ:ProductServiceService,private categoryServ:CategoryServiceService) { }
  listOfCategories:Category[];
  ngOnInit() {
    this.resertForm();

    return this.categoryServ.GetAllCategories()
    .subscribe(data => this.listOfCategories = data);
  }
   // reset from

   resertForm(from?: NgForm)
   {
     if(from != null) {
     from.resetForm();
     }

     this.productServ.formData ={
        ProductId:null,
        productName:"",
        Description:"",
        Price:"",
        ImgUrl:"",
        CatId:null
  };
   }
   //end of reset form
   //post
   onSubmit(form:NgForm)
 {
   console.log(form.value);

     this.insertRecord(form);//sent object of employee from form to insert record


 }

 insertRecord(form:NgForm)//sent object of employee from insertrecord to service
 {
   return this.productServ.PostProduct(form.value).subscribe((res)=>{
     this.route.navigate(['/Home']);
   });



 }

}
