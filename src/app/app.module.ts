import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeelSelectionComponent } from './components/weel-selection/weel-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    WeelSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
