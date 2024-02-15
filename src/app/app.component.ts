import { Component } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlesheet-task';

  sheetDetail: any=[]

  constructor( private googleSheetService : GooglesheetService){}

  ngOnInit(): void {}
   
    getSheet2Data(){
    this.googleSheetService.getData('1-DcZZgJ8Y2HcKR-NVmsSuzcTx_Vb5iqSorWAz-idu1o','OFFER USD').subscribe(
      (data: any) => {
        // Assuming data is an array of objects with progress, date, and status fields
        this.sheetDetail = data.values.map((row: any) => ({
          progress: row[3],
          date: row[2],
          status: row[4]
        }));
        console.log('second sheet details',this.sheetDetail)
        console.log('second sheet data',data)
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }

      
    );

  }


  getSheet1Data(){
    //passing sheet id and sheet name
    this.googleSheetService.getData('1-DcZZgJ8Y2HcKR-NVmsSuzcTx_Vb5iqSorWAz-idu1o','OFFER USD').subscribe(
      (data: any) => {
        // Assuming data is an array of objects with progress, date, and status fields
        this.sheetDetail = data.values.map((row: any) => ({
          progress: row[3],
          date: row[2],
          status: row[4]
        }));
        console.log('sheet details',this.sheetDetail)
        console.log('data',data)
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
