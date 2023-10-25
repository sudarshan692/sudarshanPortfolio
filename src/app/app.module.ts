import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AnimatedAboutTextComponent } from './animated-about-text/animated-about-text.component';
import { AnimatedHeadingComponent } from './animated-heading/animated-heading.component';
import { TesterExperienceComponent } from './tester-experience/tester-experience.component';
import { AngularExperienceComponent } from './angular-experience/angular-experience.component';
import { InternshipExperienceComponent } from './internship-experience/internship-experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedAboutTextComponent,
    AnimatedHeadingComponent,
    TesterExperienceComponent,
    AngularExperienceComponent,
    InternshipExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
