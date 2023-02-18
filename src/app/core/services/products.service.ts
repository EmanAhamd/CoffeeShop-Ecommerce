import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  menueItems:product[] = [
    {id: 1, name:'Ice Coffee', price: 13, url:'assets/imges/d3.webp', category: 'Drinks', quantity: 1},
    {id: 2, name:'Honeycake', price: 6, url:'assets/imges/des4.webp', category: 'Dessert', 
    quantity: 1},
    {id: 3, name:'Donut', price: 5, url:'assets/imges/des5.webp', category: 'Dessert', quantity: 1},
    {id: 4, name:'Latte', price: 10, url:'assets/imges/d2.webp', category: 'Drinks', 
    quantity: 1},
    {id: 5, name:'Cheesecake', price: 9, url:'assets/imges/des2.webp', category: 'Dessert', quantity: 1},
    {id: 6, name:'Hot Chocolate', price: 15, url:'assets/imges/d4.webp', category: 'Drinks', quantity: 1},
    {id: 7, name:'Frappuccino', price: 17, url:'assets/imges/d5.webp', category: 'Drinks', quantity: 1},
    {id: 8, name:'Chocolate Cake', price: 10, url:'assets/imges/des3.webp',category: 'Dessert', quantity: 1},

  ];

  // onAddProduct(data:any){
  //   this.menueItems.push(data);
  //   return this.menueItems;
  // }

  onDeleteProduct(productItem:product){
    this.menueItems = this.menueItems.filter(item => item.id !== productItem.id);
    console.log(this.menueItems);
    
  }
}
