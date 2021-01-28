import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { HomeComponent } from './components/home/home.component';
import { FullCarComponent } from './components/full-car/full-car.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    FullCarComponent,

  ],
  imports: [
    BrowserModule,
RouterModule.forRoot([
  {
    path:'link/home',component:HomeComponent
  },
  {
    path:'link/cars',component:CarsComponent,children:[
      {
        path:':id',component:FullCarComponent
      }
    ]
  }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
