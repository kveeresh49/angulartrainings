import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerComponent implements OnInit , OnChanges,AfterViewInit{

  newServerName:string = '';
  newServerContent:string = '';

  @Output() serverCreated = new EventEmitter();
  @Output() bluePrintCreated = new EventEmitter();

  @ViewChild('localRef',{static:true}) localRef:ElementRef

  @Input() childData: number
  
  constructor() { }

  ngOnInit() {
    //console.log("data, child ngOnit")
  }

  ngOnChanges(chnages:SimpleChanges){
   
  }


  ngAfterViewInit(){
    console.log(this.localRef,'View Init')
    
  }


  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.localRef.nativeElement.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      type: 'blueprint',
      name: this.localRef.nativeElement.value,
      content: this.newServerContent
    });
  }

}
