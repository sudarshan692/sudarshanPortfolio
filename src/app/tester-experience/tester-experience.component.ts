import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tester-experience',
  templateUrl: './tester-experience.component.html',
  styleUrls: ['./tester-experience.component.css'],
  animations: [
    trigger('riseAnimation', [
      state(
        'start',
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        })
      ),
      state(
        'end',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('start => end', animate('1s ease')),
    ]),
  ],
})
export class TesterExperienceComponent {
  animationState = 'start';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const elPosition = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const isVisible = elPosition < windowHeight;

    this.animationState = isVisible ? 'end' : 'start';
  }
}
