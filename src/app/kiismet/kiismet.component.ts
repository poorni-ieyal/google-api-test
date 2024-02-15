import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GooglesheetService } from '../googlesheet.service';

@Component({
  selector: 'app-kiismet',
  templateUrl: './kiismet.component.html',
  styleUrls: ['./kiismet.component.css']
})
export class KiismetComponent {
  sheetDetail:any=[];
  sheetDetail1:any=[];
  selectedBrand:string = 'all'
  brands:Array<any>=[];
  searchText:string = '';
  cartedProduct: Array<any> = [];
  
  

  constructor(private http : HttpClient, private googleSheetService : GooglesheetService){

  }
  ngOnInit() {
    this.GetFragrance();// when page loads api calls and shows all products list
    this.getBrand();
  }
  GetKiismetData(){
    this.googleSheetService.getData('1-DcZZgJ8Y2HcKR-NVmsSuzcTx_Vb5iqSorWAz-idu1o','OFFER USD').subscribe(
      (data: any) => {
        // Assuming data is an array of objects with progress, date, and status fields
        // this.sheetDetail = data.values.map((row: any) => ({
        //   progress: row[3],
        //   date: row[2],
        //   status: row[4]
        // }));
        
        this.sheetDetail = data.values
        console.log(' sheet details',this.sheetDetail)
        console.log(' sheet data',data)
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }

      
    );

  }

  GetFragrance(){
   this.googleSheetService.getData('1-DcZZgJ8Y2HcKR-NVmsSuzcTx_Vb5iqSorWAz-idu1o','Sheet1').subscribe(
    (data: any) => {
      // Assuming the data array contains multiple items, and each item has brand (index 1), description (index 2), and USD (index 6)
      this.sheetDetail1 = data.values.slice(1).map((row: any) => ({
        image:row[0],
        brand: row[1],
        description: row[2],
        price: row[6]
      }));
    },
    (error: any) => {
      console.error('Error fetching data:', error);
    }
  );
}

changeMenu(id: string){
  this.selectedBrand=id;
  console.log(this.selectedBrand);

}



getBrand(){
  
  this.googleSheetService.getData('1-DcZZgJ8Y2HcKR-NVmsSuzcTx_Vb5iqSorWAz-idu1o','Sheet2').subscribe(
    (data: any) => {
      // Assuming the data array contains multiple items, and each item has brand (index 1), description (index 2), and USD (index 6)
      this.brands = data.values.slice(1).map((row: any) => ({
        image:row[0],
        brand: row[1],
        description: row[2],
        price: row[6]

      }));
    },
    (error: any) => {
      console.error('Error fetching data:', error);
    }
  );
}

addToCart(product:any){
  console.log('product added to cart', product);
  //  this.sheetDetail1.some((instance=>instance.description === product.description))
  
  
}
decreaseQuantity(product:any){

}
increaseQuantity(product:any){

}
}