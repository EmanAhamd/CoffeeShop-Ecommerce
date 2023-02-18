import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  Form:FormGroup;
  Products:product[] = this.productsService.menueItems;
  imgUrl:any ;
  
  
  constructor(private productsService:ProductsService , private formBuilder:FormBuilder){
    this.Form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      url: ['', Validators.required],
      quantity: ['']
    })
  }

  onChooseFile(e:any){
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
      this.imgUrl = event.target.result;
      console.log(this.imgUrl);
      this.Form.get('url')?.setValue(this.imgUrl);
      }
    }
  }

  addProduct(){
      this.Products.push(this.Form.value);
      console.log(this.Products);
  }

  clearForm(){
    this.Form.patchValue({
      id:'',
      name: '',
      category:'' ,
      price:'' ,
      url:'' 
      
    })
  }
  edit(item:any){
    this.Form.patchValue({
      id:item.id,
      name: item.name ,
      category:item.category ,
      price:item.price ,
      url:item.url 
    })
    this.imgUrl = item.url;
  }
  
  updateProduct(){
    let updatedData = this.Form.value
    for (let i = 0; i < this.Products.length; i++) {
      if(this.Products[i].id == updatedData.id){
        this.Products[i] = updatedData
        console.log(this.Products[i]);
      }
      
    }
  }

  deleteProduct(productItem:product){
    this.productsService.onDeleteProduct(productItem);
    this.Products = this.productsService.menueItems;
    console.log(this.Products);
  }
}
