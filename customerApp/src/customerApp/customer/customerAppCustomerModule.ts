import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { customerRoutes } from '../routing/customerAppCustomerRouting';
import { FormsModule } from '@angular/forms';
import { customerComponent } from './customerAppCustomerComponent';

@NgModule({
  declarations: [
    customerComponent
    // charge des conmposants
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(customerRoutes)  // import des modules
  ],
  providers: [],
  bootstrap: [customerComponent] // demarre le composant customerComponent
})
export class customerModule { }
