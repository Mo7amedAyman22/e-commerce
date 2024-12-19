import { Component, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
ngOnInit():void{


  this.getAllProduct();
  this.getAllcategory();

}
addButton:boolean = false;
amount:number=1;
cartProduct:any[]=[];
item = new EventEmitter;
data:any={};

product:any [] = [];
category:[]=[];
showInput(){
  this.addButton = true;
}
  constructor(private service:ProductService ){}


  getAllProduct(){
    this.service.getAllProduct().subscribe((data:any)=>{
      this.product=data;
    })
  }
  getAllcategory(){
    this.service.getAllcategory().subscribe((data:any)=>{
      this.category=data;
  })
  }





filterCategory(event:any){
  let value = event.target.value;
    (value == "all")? this.getAllProduct() :this.getProductCategory(value);






}
getProductCategory(keyword:string){

  this.service.getProductByCategory(keyword).subscribe((data:any) =>{
    this.product = data;
  })


}
addToCart(event:any){

  let cartData =localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")!):[];

  const exit = cartData.find((item:any)=>item.id == event.id);

if(exit){

  alert("product  is already in cart");
}else{
  cartData.push(event);
  localStorage.setItem("cart" , JSON.stringify(cartData))
  this.cartProduct = cartData;
}
}




}


