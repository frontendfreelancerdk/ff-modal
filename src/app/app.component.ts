import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FFModalService} from 'ff-modal';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tpl') template: TemplateRef<any>;
  @ViewChild('tp2') template2: TemplateRef<any>;
  @ViewChild('someComponent') someComponent: TemplateRef<any>;
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
