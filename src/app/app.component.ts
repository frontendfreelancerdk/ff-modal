import {Component} from '@angular/core';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-modal-app';
  flag = false;

  openModal() {
    this.flag = true;
  }

  onClosed(event) {
    // after closed event = true
    this.flag = !event;
  }
}
