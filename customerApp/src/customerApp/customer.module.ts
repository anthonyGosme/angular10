import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { customerComponent } from './customer.component';

@NgModule({
  declarations: [
    customerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [customerComponent]
})
export class AppModule { }
