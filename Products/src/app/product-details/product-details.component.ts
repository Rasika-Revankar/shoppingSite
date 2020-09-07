import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  shirtColor: string = 'Blue';

  ngOnInit() {
  }
  colorSelected(color: string) {
    this.shirtColor = color;
  }

}
