import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
