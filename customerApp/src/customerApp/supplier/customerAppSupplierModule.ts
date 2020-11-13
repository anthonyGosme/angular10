
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { supplierRoutes } from '../routing/customerAppSupplierRouting';
import { FormsModule } from '@angular/forms';
import { supplierComponent } from './customerAppSupplierComponent';
@NgModule({
  declarations: [
    supplierComponent
    // charge des conmposants
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(supplierRoutes)  // import des modules
  ],
  providers: [],
  bootstrap: [supplierComponent] // demarre le composant customerComponent
})
export class supplierModule { }
