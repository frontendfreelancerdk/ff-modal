import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FFModalModule} from 'ff-modal';
import {FFModalModule} from '../../projects/ff-modal/src/lib/ff-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FFModalModule,
    FFModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
