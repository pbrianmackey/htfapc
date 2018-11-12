import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule, MatGridListModule, MatIconModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SamplesComponent } from './samples/samples.component';
import { AllMaterialModule } from './all-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    SamplesComponent
  ],
  imports: [
    AllMaterialModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatGridListModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
