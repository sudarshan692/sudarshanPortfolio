import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-heading',
  templateUrl: './animated-heading.component.html',
  styleUrls: ['./animated-heading.component.css'],
  animations: [
    trigger('tectonicAnimation', [
      state(
        'initial',
        style({
          opacity: 0,
          transform: 'translateY(10px) rotate(0deg)',
        })
      ),
      state(
        'final',
        style({
          opacity: 1,
          transform: 'translateY(0px)rotate(0deg)',
        })
      ),
      transition('initial=> final', animate('1s')),
    ]),
    trigger('rotateAnimation', [
      state(
        'initial',
        style({
          opacity: 0,
          transform: 'translateY(0) rotate(360deg)',
        })
      ),
      state(
        'final',
        style({
          opacity: 1,
          transform: 'translateY(0)rotate(0deg)',
        })
      ),
      transition('initial=> final', animate('15s')),
    ]),
  ],
})
export class AnimatedHeadingComponent implements OnInit {
  animationState = 'initial';

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'final';
    }, 0);
  }
}
