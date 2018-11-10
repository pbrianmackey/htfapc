import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'samples', component: SamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
