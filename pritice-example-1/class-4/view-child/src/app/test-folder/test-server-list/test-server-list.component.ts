import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-server-list',
  templateUrl: './test-server-list.component.html',
  styleUrls: ['./test-server-list.component.css'],
  encapsulation :ViewEncapsulation.Emulated// emilited
})
export class TestServerListComponent implements OnInit {

// step -1 with out alies
 // @Input() element: {type:string,name:string,content:string}
 @Input('sevElement') element: {type:string,name:string,content:string}

  constructor() {

    console.log(this.element)
   }

  ngOnInit() {
  }

}
