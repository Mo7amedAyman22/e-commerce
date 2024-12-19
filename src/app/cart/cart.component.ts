import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent {
  constructor(private services:CartService){}
  cartData:any[]=[];
  total:any=0;
  success:boolean =false;

  ngOnInit():void{
    this.getCartProduct();

  }

getCartProduct(){

  let cartData =localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")!):[];
  this.cartData = JSON.parse(localStorage.getItem("cart")!);
  this.getTotalCart();



}


getTotalCart(){
  this.total =0;
  for(let x in this.cartData)
  {
    this.total += this.cartData[x].price * this.cartData[x].quantity;
  }
}

addAmount(index:number){
  this.cartData[index].quantity++;
  localStorage.setItem("cart" , JSON.stringify(this.cartData))

}


minsAmount(index:number){
  this.cartData[index].quantity--;
  localStorage.setItem("cart" , JSON.stringify(this.cartData))
}

deleteProduct(index:number){
  this.cartData.splice(index ,1)
  localStorage.setItem("cart" , JSON.stringify(this.cartData))
}
detectChange(){
  localStorage.setItem("cart" , JSON.stringify(this.cartData))
}
clearProduct(){
  this.cartData = [];
  localStorage.setItem("cart" , JSON.stringify(this.cartData))
}
addcart()
{
  let product = this.cartData.map(item =>{
    return{productId:item.id , quantity:item.quantity}
  })
  let Model = {
    userId:5 ,
    date: new Date(),
    product:product
  }
  this.services.createNewCart(Model).subscribe(data =>{
   this.success = true;

  })
  console.log(Model)

}
}
