import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { ProductServiceService } from './service/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productServiceService: any;

  constructor(private roductServiceService: ProductServiceService) {

  }

  
  ngOnInit(): void {

    this.loadProduct()
  }

  loadProduct(){
    this.productServiceService.getProduct().subscribe((data: any) => {
      console.log(data);
    })
    // this.productServiceService.getProduct()
    //   .then((res:any)=>{
    //     console.log(res);
        
    //   })
    
  }
}
