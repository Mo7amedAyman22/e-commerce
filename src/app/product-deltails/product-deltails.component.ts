import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-deltails',
  templateUrl: './product-deltails.component.html',
  styleUrls: ['./product-deltails.component.scss']
})
export class ProductDeltailsComponent {

  id:any
  data:any ={}
  constructor(private route:ActivatedRoute , private services:ProductService){

    this.id = this.route.snapshot.paramMap.get("id")

  }

  ngOnInit():void{

    this.getProduct();
  }

  getProduct(){
    this.services.getProductDeltails(this.id).subscribe(data=>{
      this.data = data;

    })
  }

}
