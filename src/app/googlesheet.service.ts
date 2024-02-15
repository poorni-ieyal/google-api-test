import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {
  // private apiKey = 'AIzaSyBuJ_9uWl21ue5TteOzKZ5AHB3aChfLqqY';
  private apiKey= 'AIzaSyByctSlhz2UhL_R-a9TbcH7Fcnh4UyFV1s'

 
  // private sheetId = '1FUmQzgelPvuowVj7bQepfXwDloOa82w9Cp8BAyyDIsg';
  // private range = 'Sheet1';


  constructor( private http : HttpClient ) { }

  getData(sheetId : string,range : string){
    // https://sheets.googleapis.com/v4/spreadsheets/1FUmQzgelPvuowVj7bQepfXwDloOa82w9Cp8BAyyDIsg/values/Sheet1?key=AIzaSyBuJ_9uWl21ue5TteOzKZ5AHB3aChfLqqY
  const apiUrl=`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${this.apiKey}`
  return this.http.get<any>(apiUrl)
  }

}
