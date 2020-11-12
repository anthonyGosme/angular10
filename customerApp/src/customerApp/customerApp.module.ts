import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { customerComponent } from './customerApp.component';

@NgModule({
  declarations: [
    customerComponent// charge des conmposants
  ],
  imports: [
    BrowserModule, FormsModule   // import des modules
  ],
  providers: [],
  bootstrap: [customerComponent] // demarre le composant customerComponent
})
export class customerModule { }
