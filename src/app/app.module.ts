import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductModule } from '@app/product/product.module';
import { ServicesModule } from '@app/services/services.module';
import { CartModule } from '@app/cart/cart.module';
import { NavModule } from '@app/nav/nav.module';
import { NotFoundModule } from '@app/not-found/not-found.module';

import { AppComponent } from '@app/app.component';
import { ProductComponent } from '@app/product/product.component';
import { BrochuresComponent } from '@app/product/brochures/brochures.component';
import { CartComponent } from '@app/cart/cart.component';
import { NotFoundComponent } from '@app/not-found/not-found.component';

import { DataService } from '@app/services/data.service';
import { HttpService } from '@app/services/http.service';
import { ApiService } from '@app/services/api.service';


const appRoutes: Routes = [
  { 
    path: '', 
    component: ProductComponent, 
    pathMatch: 'full', // must be added due to bug in latest router version,
    // children: [
    //   { path: 'brochures', component: BrochuresComponent, pathMatch: 'full' },
    // ]
  },
  { 
    path: 'brochures', 
    component: BrochuresComponent, 
    pathMatch: 'full', // must be added due to bug in latest router version,
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full' // must be added due to bug in latest router version
  },
  { 
    path: '**', 
    component: NotFoundComponent, 
    pathMatch: 'full' // must be added due to bug in latest router version
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    ProductModule,
    ServicesModule,
    CartModule,
    NotFoundModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HttpService,
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
