import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product: any | undefined

  constructor(private alt: AngularFirestore) {
    this.product = this.alt.collection('product')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getProduct() {
    return this.product
  }
  
}
