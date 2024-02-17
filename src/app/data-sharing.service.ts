import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
    
  myBehaviorSubject = new BehaviorSubject<number>(0);


  constructor() { }

  changeQuantity(quantity:number){
    this.myBehaviorSubject.next(quantity)
  }
}
