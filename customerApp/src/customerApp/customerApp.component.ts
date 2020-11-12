import { Component } from '@angular/core';
import { Customer } from "./customerApp.model" ;

@Component({
  selector: 'customer-root',
  templateUrl: './customerApp.view.html' 
   /** charge la vue */
})
export class customerComponent { 
  /** export pour être importé */
  title = 'customerApp';
  customerModel : Customer = new Customer() ;
  customerModels : Array<Customer> = new Array<Customer>() ;
  add(){
    this.customerModels.push(this.customerModel) ;
    this.customerModel = new Customer()  // clear UI
    }
  
}
