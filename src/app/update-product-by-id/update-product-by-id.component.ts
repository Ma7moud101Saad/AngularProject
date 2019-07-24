import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../shared/product-service.service';
import { Product } from '../shared/product';
import { Category } from '../shared/category';
import { CategoryServiceService } from '../shared/category-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product-by-id',
  templateUrl: './update-product-by-id.component.html',
  styleUrls: ['./update-product-by-id.component.css']
})
export class UpdateProductByIdComponent implements OnInit {
  listOfCategories:Category[];
  constructor(private productServ:ProductServiceService,private activeRoute:ActivatedRoute,private route:Router,private categoryServ:CategoryServiceService) { }
  prod:Product;
  ngOnInit() {
    this.resertForm();
    const selectedProductId = this.activeRoute.snapshot.params['ProdId'];
    console.log(selectedProductId);

    return this.categoryServ.GetAllCategories()
    .subscribe(data => {this.listOfCategories = data

      this.productServ.GetProductById(selectedProductId).subscribe(data=>
        {
          this.prod = data;
          this.popliteForm(this.prod);

        });
    });

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

     //poplitForm
     popliteForm(prod:Product)
     {
       this.productServ.formData = Object.assign({},this.prod);
     }

     //update

  onSubmit(form:NgForm)
  {
      this.UpdateRecord(form);
  }



  UpdateRecord(form:NgForm)//sent object of employee from insertrecord to service
  {
    return this.productServ.PutCategory(form.value).subscribe((res)=>{
      this.route.navigate(['/Home']);
    });


  }


}
