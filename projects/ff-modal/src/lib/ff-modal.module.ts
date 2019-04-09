import {ModuleWithProviders, NgModule} from '@angular/core';
import {FFModalComponent} from './ff-modal/ff-modal.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FFOverlayModule} from 'ff-overlay';
import {FFModalService} from './ff-modal.service';

@NgModule({
  declarations: [FFModalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FFOverlayModule
  ],
  exports: [FFModalComponent],
  entryComponents: [FFModalComponent]
})
export class FFModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FFModalModule,
      providers: [FFModalService]
    };
  }
}
