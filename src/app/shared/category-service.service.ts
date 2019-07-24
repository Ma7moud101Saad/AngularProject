import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  formData:Category;
  readonly routeUrl= "http://localhost:51823/api";
  constructor(private _http: HttpClient) { }
  GetAllCategories()
  {
    return this._http.get<Category[]>(this.routeUrl + '/categories');
  }

  Delete(id:number)
  {
    return this._http.delete(this.routeUrl + '/categories/'+id);
  }

  postCategory(formData: Category)
  {
    return this._http.post(this.routeUrl + '/categories', formData);
  }

  getCategoryById(id:number)
  {
    return this._http.get<Category>(this.routeUrl+'/categories/'+id);
  }

  PutCategory(formData: Category)
  {
    return this._http.put(this.routeUrl + '/categories/'+formData.CategoryId, formData);
  }
}
