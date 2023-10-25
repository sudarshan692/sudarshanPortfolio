import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipExperienceComponent } from './internship-experience.component';

describe('InternshipExperienceComponent', () => {
  let component: InternshipExperienceComponent;
  let fixture: ComponentFixture<InternshipExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
