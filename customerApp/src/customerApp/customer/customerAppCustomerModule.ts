import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { customerRoutes } from '../routing/customerAppCustomerRouting';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { customerComponent } from './customerAppCustomerComponent';
import { gridComponent } from '../utility/customerAppGridComponent';

@NgModule({
  declarations: [
    customerComponent, gridComponent
    // charge des conmposants
  ],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule, RouterModule.forChild(customerRoutes)  // import des modules
  ],
  providers: [

  ],
  bootstrap: [customerComponent] // demarre le composant customerComponent
})
export class customerModule { }
