import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterExperienceComponent } from './tester-experience.component';

describe('TesterExperienceComponent', () => {
  let component: TesterExperienceComponent;
  let fixture: ComponentFixture<TesterExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
