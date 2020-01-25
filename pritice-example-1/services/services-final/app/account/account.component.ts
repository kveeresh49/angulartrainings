import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private accountService:AccountService){}
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {

    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.accounts[this.id].status = status;
    console.log('A server status changed, new status: ' + status);

    this.accountService.statusUpdated.emit(status);
  }
}
