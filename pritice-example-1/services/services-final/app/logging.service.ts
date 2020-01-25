import {  Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logServiceMethod(status:string){
        console.log(`A server status changed,new Status ${status}`)
    }
}