import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [HeaderComponent, AdvertisingComponent, ProductCardComponent, CategoryComponent],
  exports: [HeaderComponent, AdvertisingComponent, ProductCardComponent, CategoryComponent],
  imports: [
    CommonModule,
     IonicModule, 
     FormsModule,
     ReactiveFormsModule
  ]
})
export class ComponentsModule { }
