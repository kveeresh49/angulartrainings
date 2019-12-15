import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {


  @Output()  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output()  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

   

newServerName = '';
newServerContent = '';

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
      serverContent: this.newServerContent
    });

   
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

  }

}
