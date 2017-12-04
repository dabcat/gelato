import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from '@app/product/product.component';
import { BrochuresComponent } from './brochures/brochures.component';
import { PostersComponent } from './posters/posters.component';
import { FlyersComponent } from './flyers/flyers.component';
import { ProductFormatsComponent } from './product-formats/product-formats.component';
import { ProductTemplateLinksComponent } from './product-template-links/product-template-links.component';
import { ProductTypesComponent } from './product-types/product-types.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductComponent,
    BrochuresComponent,
    PostersComponent,
    FlyersComponent,
    ProductFormatsComponent,
    ProductTemplateLinksComponent,
    ProductTypesComponent
  ]
})
export class ProductModule { }
