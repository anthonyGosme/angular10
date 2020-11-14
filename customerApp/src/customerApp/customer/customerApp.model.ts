import {NgForm,
    FormGroup,
        FormControl,
            Validators,
    FormBuilder} from '@angular/forms' ;

//    form group -> form control -> validation
// 1 create the validation object model
// 2 connect to the validation object model to the UI
// 3 check if isValid, isDirty(changed)


export class Customer {
    CustomerCode : string = "" ;
    CustomerName : string = "" ;
    CustomerAmount : number = 0 ;
    // 1 create the validation object model
    formCustomerGroup : FormGroup = null // create object form group
    constructor(){
       
        var _builder = new FormBuilder() ;
        this.formCustomerGroup = _builder.group({}) // creat the builder ( tree structure form group -> form control -> validation)
        // add a control and a  validation for required
        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('',Validators.required)) ;
        // add 2 validators
        var validationCollection =[];
        validationCollection.push(Validators.required) ;
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$")) ;
        this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('',Validators.compose(validationCollection))) ;
    }


}