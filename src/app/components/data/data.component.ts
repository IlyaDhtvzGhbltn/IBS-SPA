import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  products: Product[] = [];
  constructor(private dataService: DataService) {
    dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
