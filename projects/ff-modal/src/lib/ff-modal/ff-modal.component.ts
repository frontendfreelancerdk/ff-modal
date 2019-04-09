import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {modalState, modalWrapperState} from '../animations';
import {BehaviorSubject} from 'rxjs';

export interface FFModalOptions {
  disabled?: boolean;
  cross?: boolean;
  overlay?: boolean;
  closeOnClickOutsideModal?: boolean;
  rounded?: boolean;
  overlayClass?: string;
  wrapperClass?: string;
}

const defaultOptions = {
  disabled: false,
  cross: true,
  overlay: true,
  closeOnClickOutsideModal: true,
  rounded: true,
  overlayClass: '',
  wrapperClass: ''
};

@Component({
  selector: 'ff-modal',
  templateUrl: './ff-modal.component.html',
  styleUrls: ['./ff-modal.component.scss'],
  animations: [modalState, modalWrapperState],
  encapsulation: ViewEncapsulation.None
})
export class FFModalComponent implements AfterViewInit {
  _state = 'initial';
  _animated = true;
  _options: FFModalOptions = defaultOptions;
  get options() {
    return this._options;
  }

  public _afterHide = new BehaviorSubject(false);

  get _visibility() {
    return this._state;
  }

  set _visibility(val) {
    this._state = val;
  }

  @Input('ff-content') content: TemplateRef<any>;

  @Input('ff-modal-options') set options(options: FFModalOptions) {
    this._options = Object.assign({}, this._options, options);
    if (!this.options.overlay) {
      this._animated = false;
      this._anim = false;
      this._visibility = 'visible';
      this.classes = '';
    } else {
      this.classes = 'ff-modal-overlay ' + this.options.overlayClass;
    }

  }

  _classes = 'ff-modal ff-modal-overlay';
  set classes(val: string) {
    this._classes = 'ff-modal ' + val;
  }

  @HostBinding('@fadeInOut') _anim: boolean | string = 'fade';

  @HostBinding('class') get classes() {
    return this._classes;
  }

  @HostListener('click', ['$event']) onClick(e) {
    if (e.target === this.el.nativeElement && this._options.closeOnClickOutsideModal) {
      this.close();
    }
  }

  @HostListener('@fadeInOut.done', ['$event']) hostAnimationDone(e) {
    if (e.toState === 'fade') {
      this._animated = false;
      this._visibility = 'visible';
    }
  }

  @Output() closed = new EventEmitter<boolean>();


  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) {
    this._afterHide.subscribe((val: boolean) => {
      if (val) {
        this.closed.emit(val);
      }
    });
  }

  public close() {
    if (!this.isOpen() || this._options.disabled) {
      return;
    }
    this._visibility = 'hidden';
  }

  _animationStart() {
    this._animated = true;
  }

  _animationDone(e) {
    if (e.toState !== 'initial') {
      this._animated = false;
    }
    if (e.toState === 'hidden') {
      this._afterHide.next(true);
    }
  }

  ngAfterViewInit(): void {
    this._doCheck();
  }

  _doCheck() {
    this.cdRef.detectChanges();
  }

  public isOpen() {
    return !this._animated && this._visibility === 'visible';
  }
}
