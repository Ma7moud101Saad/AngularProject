import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/product-service.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private prodServ:ProductServiceService) { }
  cart:Product[]=[];
  ngOnInit() {
 this.cart= JSON.parse(localStorage.getItem("product"));

  }

}
