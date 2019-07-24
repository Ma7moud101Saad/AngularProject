import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  readonly routeUrl= "http://localhost:51823/api";
  formData:Product;
  constructor(private _http: HttpClient) { }
  GetAllProducts()
  {
    return this._http.get<Product[]>(this.routeUrl + '/Products');
  }


  PostProduct(formData: Product)
  {
    return this._http.post(this.routeUrl + '/Products', formData);
  }

  Delete(id:number)
  {
    return this._http.delete(this.routeUrl + '/Products/'+id);
  }

  GetProductById(id:number)
  {
    return this._http.get<Product>(this.routeUrl+'/Products/'+id);
  }

  //put
  PutCategory(formData: Product)
  {
    return this._http.put(this.routeUrl + '/Products/'+formData.ProductId, formData);
  }



}
