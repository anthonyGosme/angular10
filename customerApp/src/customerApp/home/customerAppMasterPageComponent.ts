import { Component } from '@angular/core';


@Component({
  selector: 'customer-root',
  templateUrl: './customerAppMasterPageView.html' 
   /** charge la vue */
})
export class masterPageComponent { 
  /** export pour être importé */
  title = 'master';

}
