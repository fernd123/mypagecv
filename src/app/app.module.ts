import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Routes
import { APP_ROUTING } from './app.routes';
import { NavbarDashboardComponent } from './components/shared/navbar-dashboard/navbar-dashboard.component';
import { PersonalinformationComponent } from './components/dashboard/personalinformation/personalinformation.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { CourseComponent } from './components/dashboard/course/course.component';
import { EducationComponent } from './components/dashboard/education/education.component';
import { SkillsComponent } from './components/dashboard/skills/skills.component';
import { InterestsComponent } from './components/dashboard/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    PersonalinformationComponent,
    ExperienceComponent,
    CourseComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
