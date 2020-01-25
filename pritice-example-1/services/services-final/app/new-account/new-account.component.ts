import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  
  constructor(private loggingService :LoggingService,private accountSerice:AccountService) {
    this.accountSerice.statusUpdated.subscribe((data) => {
      alert(`data is loggied ${data}`);
    })
  }
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
   // this.loggingService.logServiceMethod(accountStatus);
    this.accountSerice.onAddAccount(accountName,accountStatus);
    
  }
}
