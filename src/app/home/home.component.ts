import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstname="";

  lastname="js";

  id=662622662;

  status=false;

  Mobiles=['samsung','oppo','realme','redmi']



  constructor() { }

  ngOnInit(): void {
}

print(event:any){
  alert(this.firstname)
}

change(event:any){
  alert("changed the laptop");
}

reset(event:any){
  alert('you had resetted your page')
}

  



} 



