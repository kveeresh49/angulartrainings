import { Component } from '@angular/core'

@Component({

    selector : 'app-header',
    templateUrl :'./app.header.html',
    styleUrls : ['./app.component.css']

})


export class HeaderComponent {



    constructor () {
        console.log('Header Constructor')
    }


}