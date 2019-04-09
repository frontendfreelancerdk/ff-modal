[![Build Status](https://travis-ci.org/frontendfreelancerdk/ff-modal.svg?branch=master)](https://travis-ci.org/frontendfreelancerdk/ff-modal)

# ff-modal

## Installing 

```
npm install ff-modal --save
```
Also if you will use FFModalService you have to install one more dependency. 
```
npm install ff-overlay --save
```

## Using

You have a two ways to use modal in your project:
- from component
- from service

`!IMPORTANT`
The main difference - if you use with the service there can be only single modal,
but if you use with component there can be multiple modals. Also service method `close` 
can't close any modals which you created as component.

### First step : include FFModalModule in AppModule imports.
`app.module.ts`
```typescript
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFModalModule} from 'ff-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FFModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```
### Then you can use ff-modal component:
#### First way
As ng-content

`app.component.html`
```angular2html
<ff-modal *ngIf="flag" (closed)="flag = false">
  <p>Lorem ipsum dolor sit amet.</p>
</ff-modal>

<button (click)="flag = true">open modal</button>
```
Or with Template Reference Variables

`app.compoent.html`
```angular2html
<ff-modal *ngIf="flag" [ff-content]="myTemlate" (closed)="flag = false">
</ff-modal>

<ng-template #myTemlate>
  <p>Lorem ipsum dolor sit amet.</p>
</ng-template>

<button (click)="flag = true">open modal</button>
```
`app.component.ts`
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag = false;
}
```

#### Second way

Using with service and Template Reference Variables

**Remember! You need to install ff-overlay dependency to use service**
```
npm install ff-overlay --save
```

`app.component.ts`
```typescript
import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FFModalService} from 'ff-modal';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myTemlate') template: TemplateRef<any>;
  @ViewChild('someComponent') someComponent: TemplateRef<any>;
  
  constructor(public ffModalService: FFModalService) {
  }

  openModal(template) {
    this.ffModalService.open(template);
  }
  
  openModalFromViewChild(){
    this.ffModalService.open(this.template);
  }

  closeModal(){
    this.ffModalService.close();
  }
}
```

`app.component.html`

```angular2html
<ng-template #myTemlate>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusantium modi non vitae. A consequuntur delectus,
    dolore est maiores mollitia quaerat quisquam quos sit vel! ?
  </div>
</ng-template>

<ng-template #someComponent>
  <!--Your some component (e.g login)-->
  <some-component></some-component>
</ng-template>

<button (click)="openModal(someComponent)">open some component in modal</button>
<button (click)="openModalFromViewChild()">open another modal</button>
<button (click)="closeModal()">close modal</button>
```

## API
`<ff-modal>`
```typescript
// [ff-content] for set some template into modal
  @Input('ff-content') content: TemplateRef<any>;
// [ff-modal-options] for set options
  @Input('ff-modal-options') options: FFModalOptions;
// (closed) will be called after closing the modal (after all animations are done) 
  @Output() closed: EventEmitter<boolean>;
```

`FFModalService`
```typescript
/* Method open modal. First parameter is required.
It takes some template that you want to set.
Second - is optional. It takes options for modal */
  open(template:TemplateRef<any>, options: FFModalOptions)
// Method take some options that will be set to modal
  setOptions(options: FFModalOptions)
// Method just closes current modal
  close()

```

### Options

```typescript
// Default options
{
  disabled: false, // block closing
  cross: true, // should a cross be present
  overlay: true, // should a overlay (background) be present
  closeOnClickOutsideModal: true, // should close modal after click on overlay
  rounded: true, // should modal and cross be rounded
  overlayClass: '', // css class to be added to the overlay
  wrapperClass: '' // css class to be added to the wrapper
}
```

## Styling
You can change default styles. That can be used to target the overlay

`styles.css` your global styles
```css
ff-modal.ff-modal-overlay{
  /* for change styles for overlay (e.g background) */
}

ff-modal .ff-modal-wrapper{
  /* for change styles for modal-wrapper 
  (e.g background, padding , position and so on) */
}

ff-modal .ff-modal-cross{
  /* for change styles for default cross */
}

```

## License

MIT [Frontend Freelancer](mailto:developer@frontend-freelancer.com)
