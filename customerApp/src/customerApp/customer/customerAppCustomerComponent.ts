import { Component } from '@angular/core';
import { baseLogger } from '../utility/logger';
import { Customer } from "./customerApp.model" ;

@Component({

  templateUrl: './customerAppCustomerView.html' 
   /** charge la vue */
})
export class customerComponent { 
  /** export pour être importé */
  logger : baseLogger = null;
  constructor(loggerInject : baseLogger)
  {
    this.logger = loggerInject ;
    this.logger.log();
    
  }
  title = 'customerApp';
  customerModel : Customer = new Customer() ;
  customerModels : Array<Customer> = new Array<Customer>() ;

  selectCustomer(_selected: Customer){
    this.customerModel = _selected ;
  }

  add(){
    this.customerModels.push(this.customerModel) ;
    this.customerModel = new Customer()  // clear UI
    }
 
}
