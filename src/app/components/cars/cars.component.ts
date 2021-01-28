import { Component, OnInit } from '@angular/core';
import { cars } from 'src/app/data/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars=cars;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cars);
  }

}
