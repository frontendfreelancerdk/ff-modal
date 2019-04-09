import {animate, state, style, transition, trigger} from '@angular/animations';

export const modalState = trigger('state', [
  state('void, initial, hidden', style({opacity: 0, transform: 'scale(0)'})),
  state('visible', style({opacity: 1, transform: 'scale(1)'})),
  transition('* => visible', [
    style({opacity: 0, transform: 'scale(0)'}),
    animate('300ms cubic-bezier(0, 0, 1, 0.2)')
  ]),
  transition('* => hidden', animate('200ms cubic-bezier(0, 0, 1, 0.2)', style({opacity: 0, transform: 'scale(0)'}))),
]);

export const modalWrapperState = trigger('fadeInOut', [
  state('fade', style({opacity: 1})),
  transition(':enter', [
    style({opacity: 0}),
    animate('0.5s ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({opacity: 0}))
  ])
]);
