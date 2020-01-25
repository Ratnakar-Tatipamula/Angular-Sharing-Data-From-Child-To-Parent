import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit{

  @Output() msgEvent = new EventEmitter<string>();

  constructor(){}
   message = "I am passed from Child to Parent";
   sms = "Data is passed from Child to Parent "
  ngOnInit(){

  }

  sendMessage(){
     this.msgEvent.emit(this.sms);
  }
  
}