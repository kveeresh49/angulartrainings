import { Component, Output, EventEmitter } from '@angular/core'

@Component({

    selector : 'app-header',
    templateUrl :'./app.header.html',
    styleUrls : ['./app.component.css']

})


export class HeaderComponent {

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(eventdata: string) {
      this.featureSelected.emit(eventdata);
    }
  }


