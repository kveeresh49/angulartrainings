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



onServerAdded(ele :{serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: ele.serverName,
    content: ele.serverContent
  });

 
}

onBlueprintAdded(ele :{serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: ele.serverName,
    content: ele.serverContent
  });

}



onChnageFirst() {

  this.serverElements[0].name = "changed"

}
  
  
}
