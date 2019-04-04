import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {modalState, modalWrapperState} from '../animations';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'ff-modal',
  templateUrl: './ff-modal.component.html',
  styleUrls: ['./ff-modal.component.scss'],
  animations: [modalState, modalWrapperState]
})
export class FFModalComponent implements OnInit, AfterViewInit {
  _visibility = 'initial';
  public afterHide = new BehaviorSubject(false);

  get visibility() {
    return this._visibility;
  }

  set visibility(val) {
    this._visibility = val;
  }

  @Input('ff-content') content: TemplateRef<any>;

  @HostBinding('@EnterLeave') _anim = 'fade';

  @HostListener('click', ['$event']) onClick(e) {
    if (e.target === this.el.nativeElement) {
      this.close();
    }
  }

  @HostListener('@EnterLeave.done', ['$event']) hostAnimationDone(e) {
    if (e.toState === 'fade') {
      this.visibility = 'visible';
    }
  }

  @Output() closed = new EventEmitter<boolean>();


  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) {
    this.afterHide.subscribe((val: boolean) => {
      this.closed.emit(val);
    });

    setTimeout(() => {
      this.visibility = 'visible';
    }, 5000);
  }

  ngOnInit() {
  }

  public close() {
    this.visibility = 'hidden';
  }

  _animationStart(e) {
  }

  _animationDone(e) {
    if (e.toState === 'hidden') {
      this.afterHide.next(true);
    }
  }

  ngAfterViewInit(): void {
    this._doCheck();
  }

  _doCheck() {
    this.cdRef.detectChanges();
  }
}
