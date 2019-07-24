import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../shared/user-service.service';
import { ProductServiceService } from '../shared/product-service.service';
import { Product } from '../shared/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userClaimns:any ;
  constructor(private route:Router,private userSer:UserServiceService,private productServ:ProductServiceService) { }
  listOfProducts:Product[];
  ngOnInit() {

    this.userSer.getUserClaims().subscribe((data:any)=>{
      this.userClaimns = data;
      console.log(this.userClaimns);

      return this.productServ.GetAllProducts()
      .subscribe(data => this.listOfProducts = data);
    })
  }




  Logout()
  {
    localStorage.removeItem("userToken");
    this.route.navigate(['/Login']);
  }


  //go to create component
  goToCreate()
  {

this.route.navigate(['/createProduct']);
  }

  //delete by ID

  DeleteByID(id:number)
  {
     this.productServ.Delete(id).subscribe(data=>{
      location.reload();

    });
  }

  //go to Updatecomponen
  update(id:number)
  {
    this.route.navigate(['/UpdateProductById',id]);
  }

}
