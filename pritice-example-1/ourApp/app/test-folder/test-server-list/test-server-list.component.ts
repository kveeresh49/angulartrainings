import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, OnDestroy, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test-server-list',
  templateUrl: './test-server-list.component.html',
  styleUrls: ['./test-server-list.component.css'],
  encapsulation :ViewEncapsulation.Emulated// emilited
})
export class TestServerListComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit{

// step -1 with out alies
 // @Input() element: {type:string,name:string,content:string}
 @Input('sevElement') element: {type:string,name:string,content:string}

 @ViewChild('afterView', {static:false}) afterView:ElementRef

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

ngAfterViewInit() {
  console.log("Text", this.afterView.nativeElement.textContent)
}


  ngOnDestroy() {
    console.log('object is distroyed')

  }
}
