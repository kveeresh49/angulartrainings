import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-server-list',
  templateUrl: './test-server-list.component.html',
  styleUrls: ['./test-server-list.component.css'],
  encapsulation :ViewEncapsulation.Emulated// emilited
})
export class TestServerListComponent implements OnInit,OnChanges {

// step -1 with out alies
 // @Input() element: {type:string,name:string,content:string}
 @Input('sevElement') element: {type:string,name:string,content:string}

 @Input() name:string;

  constructor() {

    console.log(this.element)
   }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){

    console.log('changers are called');
    console.log(change)

  }

}
