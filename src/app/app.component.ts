import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FFModalService} from 'ff-modal';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tpl', { static: true }) template: TemplateRef<any>;
  @ViewChild('tp2', { static: false }) template2: TemplateRef<any>;
  @ViewChild('someComponent', { static: true }) someComponent: TemplateRef<any>;
  flag = false;


  constructor(public ffModalService: FFModalService) {

  }

  openModal(template, options = {}) {
    this.ffModalService.open(template, options);
  }

  closeModal() {
    this.ffModalService.close();
  }

}
