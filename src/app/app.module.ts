import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/shared/navbar-dashboard/navbar-dashboard.component';
import { PersonalinformationComponent } from './components/dashboard/personalinformation/personalinformation.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { CourseComponent } from './components/dashboard/course/course.component';
import { EducationComponent } from './components/dashboard/education/education.component';
import { SkillsComponent } from './components/dashboard/skills/skills.component';
import { InterestsComponent } from './components/dashboard/interests/interests.component';
import { AddeducationComponent } from './components/dashboard/education/addeducation/addeducation.component';
import { AddexperienceComponent } from './components/dashboard/experience/addexperience/addexperience.component';


// Routes
import { APP_ROUTING } from './app.routes';

// Service
import { DashboardService } from './services/dashboard.service';

// Firebase

// AF2 Settings
/*
export const firebaseConfig = {
  apiKey: "AIzaSyDeXKt2vZKY2znw-XoJ5NkM8Rkdc56k4n4",
  authDomain: "mypagecv-b1174.firebaseapp.com",
  databaseURL: "https://mypagecv-b1174.firebaseio.com",
  projectId: "mypagecv-b1174",
  storageBucket: "mypagecv-b1174.appspot.com",
  messagingSenderId: "881049801031"
};
*/

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
    InterestsComponent,
    AddeducationComponent,
    AddexperienceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    /* AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, */
    APP_ROUTING
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
