import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExperienceComponent } from './angular-experience.component';

describe('AngularExperienceComponent', () => {
  let component: AngularExperienceComponent;
  let fixture: ComponentFixture<AngularExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
