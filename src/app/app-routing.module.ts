import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddClasicComponent } from './product/product-add-clasic/product-add-clasic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from "./login/login.guard";
const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/add-1', component: ProductAddClasicComponent,canActivate : [LoginGuard] },
  { path: 'products/add-2', component: ProductAddReactiveComponent,canActivate:[LoginGuard] },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/categories/:categoryId', component: ProductComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
