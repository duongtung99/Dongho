import { Component, OnInit } from '@angular/core';
import { CardService, CartItem } from '../Shared/card.sevice';
import { product } from '../Shared/product';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css'],
  providers:[ProductService]
})
export class ShopingCartComponent implements OnInit {

  cards:CartItem[]=[];
  total:number=0;
  constructor(private  productService:ProductService) {
    
    console.log(this.productService.getShoppingCardItem());
    
    this.cards = this.productService.getShoppingCardItem();
    console.log(this.cards);
    
   }
  ngOnInit(): void {
  }

  deleteCartItem(item:product){

  }

}
