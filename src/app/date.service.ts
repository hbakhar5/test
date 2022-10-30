import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
    gettodaydate(){
      let date=new Date();
      return date;
    
   }

}
