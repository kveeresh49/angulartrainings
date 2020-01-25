import { Component, OnInit, Input, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit,DoCheck ,AfterContentInit,AfterContentChecked, OnDestroy{

  @Input('element') element : {type:string,name:string,content:string};
  @ContentChild('contentParaGraph',{static:true}) pragraph : ElementRef
    

  constructor() { }

  ngOnInit() {
   console.log('im from server-list',this.pragraph)
   
  }

  ngDoCheck() {
    //console.log('event is fired');
  }

  ngAfterContentInit() {

    console.log('content is initied', this.pragraph)

  }


  ngAfterContentChecked() {

    //console.log('content is checked')

  }


  ngOnDestroy() {
    console.log('componet is distroyed')
  }




}
