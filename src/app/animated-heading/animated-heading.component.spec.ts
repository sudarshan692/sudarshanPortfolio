import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedHeadingComponent } from './animated-heading.component';

describe('AnimatedHeadingComponent', () => {
  let component: AnimatedHeadingComponent;
  let fixture: ComponentFixture<AnimatedHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
