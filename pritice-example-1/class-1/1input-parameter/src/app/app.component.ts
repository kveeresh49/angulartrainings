import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  serverElements = [
    {type:'server',name:'Text server', content:'text Content'}
  ];

constructor() {
  console.log('App Constructor')
}
  
  
}
