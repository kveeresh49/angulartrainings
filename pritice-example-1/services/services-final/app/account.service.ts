import { Injectable,EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
  public  accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter();
      onAddAccount(name:string,status:string){
        this.accounts.push({name:name,status:status});

      }
      updateStaus(id:number, status:string){
        this.accounts[id].status = status;
    }
}