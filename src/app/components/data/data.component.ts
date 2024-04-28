import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  products: Product[] = [];
  constructor(
    private authService: AuthService,
    private dataService: DataService) {

    var flag = this.authService.canActivate();
    if (flag) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

}
