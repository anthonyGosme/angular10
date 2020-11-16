import { Component } from '@angular/core';
import { baseLogger } from '../utility/logger';
import { Customer } from "./customerApp.model" ;
import {HttpClient} from "@angular/common/http"
@Component({

  templateUrl: './customerAppCustomerView.html' 
   /** charge la vue */
})
export class customerComponent { 
  /** export pour être importé */
  logger : baseLogger = null;
  disableWaitResponse : boolean = false ;
  title = 'customerApp';
  customerModel : Customer = new Customer() ;
  customerModels : Array<Customer> = new Array<Customer>() ;

  constructor(loggerInject : baseLogger, public http:HttpClient)  // dependecy injection
  {
    this.logger = loggerInject ;
    this.logger.log();
    
    
  }

  postToServer(){
    var dtoCustomer:any = {} ;
    this.disableWaitResponse = true ;
    dtoCustomer.CustomerName  = this.customerModel.CustomerName ;
    dtoCustomer.CustomerCode  = this.customerModel.CustomerCode ;
    dtoCustomer.CustomerAmount  = this.customerModel.CustomerAmount ;
    
    this.http.post("http://localhost:3000/customers", dtoCustomer).subscribe(res=>this.success(res), res=>this.error(res)) ;
    

  }
  error(res){
    console.log("erreur" + res) ;
    console.log(res) ;
  }
  success(res){
    this.getFromServer() ;
   
  }

  getFromServer(){

    this.http.get("http://localhost:3000/customers").subscribe(res=>this.successGet(res), res=>this.error(res)) ;
  }
  successGet(res){
    console.log(res) ;
    this.customerModels= res ;
    this.disableWaitResponse = false ;
    this.customerModel = new Customer() ;
  }
  


  selectCustomer(_selected: Customer){
    this.customerModel = _selected ;
  }

  add(){
    this.customerModels.push(this.customerModel) ;
    this.customerModel = new Customer()  // clear UI
    }
 
}
