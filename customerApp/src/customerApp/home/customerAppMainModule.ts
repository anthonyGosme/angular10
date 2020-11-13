import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoutes } from '../routing/customerAppMainRouting';
import { FormsModule } from '@angular/forms';
import { homeComponent } from './customerAppHomeComponent';
import { masterPageComponent } from './customerAppMasterPageComponent';
@NgModule({
  declarations: [
    homeComponent,masterPageComponent
    // charge des conmposants
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(mainRoutes)  // import des modules
  ],
  providers: [],
  bootstrap: [masterPageComponent] // demarre le composant customerComponent
})
export class mainModule { }
