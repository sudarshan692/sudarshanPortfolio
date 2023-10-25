import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   // trigger('rise1Animation', [
  //   //   state(
  //   //     'initial',
  //   //     style({
  //   //       opacity: 0,
  //   //       transform: 'translateY(80px)',
  //   //     })
  //   //   ),
  //   //   state(
  //   //     'final',
  //   //     style({
  //   //       opacity: 1,
  //   //       transform: 'translateY(0px)',
  //   //     })
  //   //   ),
  //   //   transition('initial=> final', animate('1s')),
  //   // ]),
  //   // trigger('rise2Animation', [
  //   //   state(
  //   //     'initial',
  //   //     style({
  //   //       opacity: 0,
  //   //       transform: 'translateX(0px)',
  //   //     })
  //   //   ),
  //   //   state(
  //   //     'final',
  //   //     style({
  //   //       opacity: 1,
  //   //       transform: 'translateX(0px)',
  //   //     })
  //   //   ),
  //   //   transition('initial=> final', animate('1s')),
  //   // ]),
  //   // trigger('tectonicAnimation', [
  //   //   state(
  //   //     'initial',
  //   //     style({
  //   //       opacity: 0,
  //   //       transform: 'translateY(10px) rotate(0deg)',
  //   //     })
  //   //   ),
  //   //   state(
  //   //     'final',
  //   //     style({
  //   //       opacity: 1,
  //   //       transform: 'translateY(0px)rotate(0deg)',
  //   //     })
  //   //   ),
  //   //   transition('initial=> final', animate('2s')),
  //   // ]),
  // ],
})
export class AppComponent {
  // animationState = 'initial';

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.animationState = 'final';
  //   }, 0);
  // }


}
