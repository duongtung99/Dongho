import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardService } from '../Shared/card.sevice';
import { product } from '../Shared/product';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products!:product[];
  constructor(private  productService:ProductService,private  cardService:CardService) {
    this.getProducts();
   }

  ngOnInit(): void {
  }
  getProducts(){
    this.productService.getProducts().subscribe(res=>
      {
        console.log(res.body);
        this.products = res.body as product[]
      });
  }
  addToCard(item:product){
    if (this.productService.addToCard(item)) {
      console.log(this.productService.getShoppingCardItem());
      alert("Them vao gio hang thanh cong");
    }
  }
}
