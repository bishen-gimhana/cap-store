import { ProductDataService } from '@core/index';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Product } from "@core/products/product";
import { CartService } from '@core/cart/cart.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Product>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'name','price', 'action',];

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productDataService: ProductDataService, private cartService: CartService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.productDataService
        .getAllProducts()
        .subscribe((products) => this.onDataLoad(products))
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  addItemToCart(product) {
    this.cartService.addToCart(product, 2);
  }

  onDataLoad(products: Product[]) {
    this.loading = false;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = products;
  }
  slides = [
    {'image': 'assets/NEW_ERA_Brand_Banner (1).png'}, 
    {'image': 'assets/NE NEW ARRIVAL 02 - CATEGORY BANNER (wo CTA).jpg'},
    {'image': 'assets/NOS_Homepage_Banner3_1440x.webp'}, 
    {'image': 'assets/NEW-ERA-BANNER.webp'}, 
    {'image': 'assets/HomepageBanner_W1920_700px_1440x.webp'}
  ];
  
}