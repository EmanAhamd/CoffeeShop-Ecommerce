import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItems:product[] = [];
  isDubblicated:boolean =false;
  constructor() { }

  addToCart(cartItem:product){
    this.isDubblicated = false;
    for(let i = 0; i < this.cartItems.length; i++){
      if (cartItem.id == this.cartItems[i].id) {
        this.isDubblicated = true;
        alert("Item is already in your cart!");
      }
    }
    if (!this.isDubblicated) {
      this.cartItems.push(cartItem);
      alert("Added");
      return this.cartItems;
    }
  }

  getCartItems(){
    return this.cartItems;
  }

  deletItem(cartItem:product){
    this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
    console.log(this.cartItems);
    // alert(' deleted');
  }

  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }
}
