import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/category';
import { CategoryServiceService } from 'src/app/shared/category-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {
cat:Category;
  constructor(private categoryServ:CategoryServiceService,private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.resertForm();
    const selectedCatId = this.activeRoute.snapshot.params['catID'];
    console.log(selectedCatId);
    this.categoryServ.getCategoryById(selectedCatId).subscribe(data=>{this.cat = data;
    this.popliteForm(this.cat);

    });


  }
  resertForm(from?: NgForm)
  {
    if(from != null) {
    from.resetForm();
    }

    this.categoryServ.formData ={
       CategoryId:null,
       CategoryName:"",
       ImgUrl:""
 };
  }

  popliteForm(cat:Category)
  {
    this.categoryServ.formData = Object.assign({},this.cat);
  }

  onSubmit(form:NgForm)
  {
      this.UpdateRecord(form);
  }



  UpdateRecord(form:NgForm)//sent object of employee from insertrecord to service
  {
    return this.categoryServ.PutCategory(form.value).subscribe((res)=>{
      this.route.navigate(['/category']);
    });


  }
}
