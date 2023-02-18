import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'src/app/core/models/product';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

    @Input() items:product[]= [];
    @Input() term:string ='';

    @Output() addItem:EventEmitter<any> = new EventEmitter()


}
