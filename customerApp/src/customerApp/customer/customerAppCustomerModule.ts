import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { customerRoutes } from '../routing/customerAppCustomerRouting';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { customerComponent } from './customerAppCustomerComponent';
import { gridComponent } from '../utility/customerAppGridComponent';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { myInterceptor } from '../utility/httpInterceptor';

@NgModule({
  declarations: [
    customerComponent, gridComponent
    // charge des conmposants
  ],
  imports: [
    HttpClientModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(customerRoutes)  // import des modules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: myInterceptor, multi: true
    }
  ],
  bootstrap: [customerComponent] // demarre le composant customerComponent
})
export class customerModule { }
