import { Component ,OnInit} from '@angular/core';
import { product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';



@Component({
  selector: 'app-cafe-menu',
  templateUrl: './cafe-menu.component.html',
  styleUrls: ['./cafe-menu.component.css']
})
export class CafeMenuComponent  {

  constructor(private cartService:ShoppingCartService , private productsService:ProductsService){
    this.menueItems.forEach(item => {
      if (!this.chips.includes(item.category)) {
        this.chips.push(item.category)
      }
    });
    this.FilteriedMenu  = this.menueItems;
  }

  term:string = '';

  chips:any[] = ["All"];

  FilteriedMenu:product[] = [];

  menueItems:product[] = this.productsService.menueItems;
  


  addItemToCart(cartItem:product){
    this.cartService.addToCart(cartItem);
  }

  filterByCategory(chip:any){
    if (chip === "All") {
      this.FilteriedMenu = this.menueItems;
    }else
    this.FilteriedMenu = this.menueItems.filter(item => item.category.toLocaleLowerCase().includes(chip.toLocaleLowerCase()));
  }  






}
