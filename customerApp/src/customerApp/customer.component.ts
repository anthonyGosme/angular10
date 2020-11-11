import { Component } from '@angular/core';
import { Customer } from "./customer.model" ;

@Component({
  selector: 'customer-root',
  templateUrl: './customer.view.html'
})
export class customerComponent {
  title = 'customerApp';
  customerModel : Customer = new Customer() ;
  
}
