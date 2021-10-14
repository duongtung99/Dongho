import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse}  from '@angular/common/http'
import { product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CardService, CartItem } from './card.sevice';

@Injectable({providedIn:'root'})
export class ProductService {
  private static shopingCardItems:CartItem[]=[];
  private static count:number = 0;
  private apiUrl= environment.apiUrl;
  constructor(private  httpClient:HttpClient) {
    ProductService.count++;
    console.log(ProductService.count);
   }

   getProducts(){
     const option={
      headers:new HttpHeaders({
        //request header.
      }),
      observe:'response' as const
     }
     return this.httpClient.get<product[]>(this.apiUrl,option);
   }

   addProduct(product:any):Observable<HttpResponse<any>>{
    const option={
      headers:new HttpHeaders({
        //request header.
        'Content-Type':'application/json'
      }),
      observe:'response' as const
     }
     //http post
    return this.httpClient.post<HttpResponse<any>>(this.apiUrl,product,option)
   }

   deleteProduct(id:string){
    return this.httpClient.delete(this.apiUrl+id,{observe:'body'});
   }

   updateProduct(product:product){
    const option={
      headers:new HttpHeaders({
        //request header.
        'Content-Type':'application/json'
      }),
      observe:'response' as const
     }
     return this.httpClient.put(this.apiUrl,product,option);
   }
   getProduct(id:string){
     return this.httpClient.get<product>(this.apiUrl+id);
   }

   // Card
   getShoppingCardItem(){
     return ProductService.shopingCardItems;
   }

   addToCard(item:product){
    var productExsiting = ProductService.shopingCardItems.find(x=>x.product.id==item.id);
    if (productExsiting == undefined) {
      ProductService.shopingCardItems.push({product:item,quantity:1} as CartItem);
      
      
        return true
    }
    else
    {
        productExsiting.quantity++;
        return true
    }
    return false
    
}
}
