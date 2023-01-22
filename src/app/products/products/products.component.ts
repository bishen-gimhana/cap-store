import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from '@core/products/product';
import { Observable } from 'rxjs';
import { ProductDataService } from '../../core/index';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
 
  dataScorce = new MatTableDataSource<Product>();
  loading = true;
  subsciptions=[];
  displayedColumns:['imgUrl','name','price','action'];


  @ViewChild(MatSort)sort : MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  constructor(private productDataService: ProductDataService) {}
 

  ngOnInit() {
    this.subsciptions.push(
     this.productDataService.getAllProducts()
     .subscribe(products=> this.onDatLoad (products))
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
     ngOnDestroy() {
      this.subsciptions.forEach(s =>s.subsciptions.unsubscribe());
}
 onDatLoad(products:Product[]){
  this.loading=false;
  this.dataScorce.sort= this.sort;
  this.dataScorce.paginator= this.paginator;

  this.dataScorce.data=products;
  
 }
}