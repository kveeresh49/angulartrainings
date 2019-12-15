import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {


  @Output()  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output()  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

  @ViewChild('newServerContent',{static:false}) newServerContent:ElementRef

   

//newServerName = '';
//newServerContent = '';

public model ={
  newServerName:'',
  newServerContent :''

}

  constructor() { }

  ngOnInit() {
  }


  onAddServer(nameInput) {

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });

   
  }

  onAddBlueprint(nameInput) {
    
    this.bluePrintCreated.emit({
      serverName: nameInput,
      serverContent: this.newServerContent.nativeElement.value
    });

  }

}
