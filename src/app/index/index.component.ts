import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/product-service.service';
import { Product } from '../shared/product';
import { Category } from '../shared/category';
import { CategoryServiceService } from '../shared/category-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  prodlist:Product[];
  catlist:Category[];
  constructor(private ProductServ:ProductServiceService,private categoryServ:CategoryServiceService) { }

  ngOnInit() {
    return  this.categoryServ.GetAllCategories().subscribe(data=>{
      this.catlist=data;
     return  this.ProductServ.GetAllProducts().subscribe(data1=>this.prodlist=data1);
   });
  }

ProdStringValue:Product[]=[];

  AddToCart(Prod:Product)
  {

  //  let myObj= JSON.stringify(Prod);
  this.ProdStringValue= JSON.parse(localStorage.getItem("product"));
    this.ProdStringValue.push(Prod);
    localStorage.setItem("product",  JSON.stringify(this.ProdStringValue));
    console.log(localStorage.getItem("product"));
  }

}
