import { Component, ViewChild,  AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  @ViewChild(ChildComponent) child;

  message : string;
  sms : string;
  ngAfterViewInit(){
    this.message = this.child.message;
  }

  receiveMsg($event){
    this.sms = $event;
  }

}
