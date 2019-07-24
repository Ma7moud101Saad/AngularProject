import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../shared/category-service.service';
import { Category } from '../shared/category';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  listOfCategories:Category[];
  constructor(private categoryServ:CategoryServiceService,private router:Router) { }

  ngOnInit() {

    return this.categoryServ.GetAllCategories()
    .subscribe(data => this.listOfCategories = data);

  }

  update(id:number)
  {
    this.router.navigate(['/UpdateCategory',id]);
  }

  Logout()
  {
    localStorage.removeItem("userToken");
    this.router.navigate(['/Login']);
  }



  DeleteByID(id:number)
  {

    this.categoryServ.Delete(id).subscribe(data=>{
      location.reload();

    });


  }

  goToCreate()
  {

this.router.navigate(['/CreateCategory']);
  }

}
