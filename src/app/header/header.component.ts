import { Component, OnInit } from '@angular/core';
import { product } from '../Shared/product';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor() 
  {

  }

  ngOnInit(): void {
  }

}
