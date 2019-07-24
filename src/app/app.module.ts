import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserServiceService } from './shared/user-service.service';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { CreatCategoryComponent } from './category/creat-category/creat-category.component';
import { UpdateCatComponent } from './category/update-cat/update-cat.component';
import { CreateProductComponent } from './home/create-product/create-product.component';
import { UpdateProductByIdComponent } from './update-product-by-id/update-product-by-id.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
    CategoryComponent,
    CreatCategoryComponent,
    UpdateCatComponent,
    CreateProductComponent,
    UpdateProductByIdComponent,
    CartComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
