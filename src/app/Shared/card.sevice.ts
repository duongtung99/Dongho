import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse}  from '@angular/common/http'
import { product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductService } from './product.service';
export interface CartItem{
    product:product,
    quantity:number,
}
@Injectable({providedIn:'root'})
export class CardService{
    private static cards:CartItem[]=[];

     getCards(){
        return CardService.cards;
    }
    caculateTotal():number{
        return CardService.cards.reduce((total,item)=>(item.product.price*(100-item.product.promotionPrice)/100)*item.quantity,0);
    }
    // addToCard(item:product,quantity:number){
    //     let isExist:boolean=false;
    //     for (let index = 0; index < CardService.cards.length; index++) {
    //         if(CardService.cards[index].product.id == item.id)
    //         {
    //             CardService.cards[index].quantity++;
    //             isExist = true;
    //             console.log(CardService.cards);
    //             return true;
    //         }
    //     }
    //     if (!isExist) {
    //         CardService.cards.push({product:item,quantity:1});
    //         console.log(CardService.cards);
    //         return true;
    //     }
    //     return false;
    // }
    addToCard(item:product){
        var productExsiting = CardService.cards.find(x=>x.product.id==item.id);
        if (productExsiting == undefined) {
            CardService.cards.push({product:item,quantity:1} as CartItem);
            return true
        }
        else
        {
            productExsiting.quantity++;
            return true
        }
        return false
        
    }
    deleteToCard(item:product){
    }
}