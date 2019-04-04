import {NgModule} from '@angular/core';
import {FFModalComponent} from './ff-modal/ff-modal.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FFModalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [FFModalComponent]
})
export class FFModalModule {
}
