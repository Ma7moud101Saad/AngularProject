import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { CreatCategoryComponent } from './category/creat-category/creat-category.component';
import { UpdateCatComponent } from './category/update-cat/update-cat.component';
import { CreateProductComponent } from './home/create-product/create-product.component';
import { UpdateProductByIdComponent } from './update-product-by-id/update-product-by-id.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: 'index', component:IndexComponent },
  { path: 'category', component:CategoryComponent },
  { path: 'CreateCategory', component:CreatCategoryComponent },
  { path: 'UpdateCategory/:catID', component:UpdateCatComponent },
  { path: 'Home', component:HomeComponent ,canActivate:[AuthGuard]},
  { path: 'createProduct', component:CreateProductComponent},
  { path: 'UpdateProductById/:ProdId', component:UpdateProductByIdComponent},
  { path: 'SignIn', component:UserSignInComponent },
  { path: 'Login', component:LoginComponent },
  { path: 'Cart', component:CartComponent },
  {path:'',component:IndexComponent},

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
