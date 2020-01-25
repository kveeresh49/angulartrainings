import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public accounts:Array<{name:string,status:string}>
    constructor(private accountService:AccountService){}

  ngOnInit(){
      this.accounts = this.accountService.accounts;
  }
  


}
