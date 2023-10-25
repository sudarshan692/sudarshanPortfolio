import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedAboutTextComponent } from './animated-about-text.component';

describe('AnimatedAboutTextComponent', () => {
  let component: AnimatedAboutTextComponent;
  let fixture: ComponentFixture<AnimatedAboutTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedAboutTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedAboutTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
