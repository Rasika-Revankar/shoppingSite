import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ProductService } from '../service/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  product: Product[];

  selectedItem: Product;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  cartItems: number = 0;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.sortOptions = [
      { label: 'Category', value: 'category' },
      { label: 'Name', value: 'name' },
      { label: 'Stock', value: 'inventoryStatus' },
      { label: 'Low to High', value: 'price' },
      { label: 'High to low', value: '!price' },
    ];
  }

  getProducts() {
    this.service.getProducts().subscribe((response) => {
      this.product = response.data;
    }, (err) => {
      alert('Something went wrong');
    });
  }

  selectItems(event: Event, item: Product) {
    this.selectedItem = item;
    this.cartItems += 1;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedItem = null;
  }

  getStatusColor(status): string {

    switch (status) {
      case 'INSTOCK':
        return 'green';
      case 'OUTOFSTOCK':
        return 'red';
      case 'LOWSTOCK':
        return 'orange';
      default: return '';
    }
  }

  getImageLink(imageName: string) {
    return `https://primefaces.org/primeng/showcase/assets/showcase/images/demo/product/${imageName}`;
  }
}
