import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
[x: string]: any;
  cartCount!:number

  constructor(private dataSharingService: DataSharingService){ }

  ngOnInit() {
    this.dataSharingService.myBehaviorSubject.subscribe(data=>{
      this.cartCount=data;
      console.log(data);
    })
  }
}
