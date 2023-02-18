import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/core/models/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:product[]= [];
  constructor(private cartService:ShoppingCartService){}
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(){
    this.cartService.clearCart();
    this.cartItems = [];
    alert("Cleared")
  }

  deletItem(item:product){
    this.cartService.deletItem(item);
    this.cartItems = this.cartService.getCartItems();
  }

  increase(index:number){
    this.cartItems[index].quantity++;
    
  }
  decrease(index:number){
    if(this.cartItems[index].quantity !== 1){
      this.cartItems[index].quantity--;
    }
  }
}
