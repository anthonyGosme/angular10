import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './routing/customerAppMainRouting';
import { FormsModule } from '@angular/forms';
import { customerComponent } from './customer/customerAppCustomerComponent';
import {  masterPageComponent   } from './master/customerAppMasterPageComponent';
import {  homeComponent   } from './home/customerAppHomeComponent';
import {  supplierComponent   } from './supplier/customerAppSupplierComponent';
@NgModule({
  declarations: [
    customerComponent,homeComponent,
    supplierComponent,masterPageComponent

    // charge des conmposants
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(mainRoutes)  // import des modules
  ],
  providers: [],
  bootstrap: [masterPageComponent] // demarre le composant customerComponent
})
export class customerModule { }
