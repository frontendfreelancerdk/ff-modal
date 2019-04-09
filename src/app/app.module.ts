import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFModalModule} from 'ff-modal';
import {SomeComponentComponent} from './some-component/some-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent
  ],
  imports: [
    FFModalModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
