import { SkillsComponent } from './components/dashboard/skills/skills.component';
import { InterestsComponent } from './components/dashboard/interests/interests.component';
import { EducationComponent } from './components/dashboard/education/education.component';
import { CourseComponent } from './components/dashboard/course/course.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalinformationComponent } from './components/dashboard/personalinformation/personalinformation.component';


export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'personaldata', component: PersonalinformationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'interests', component: InterestsComponent },

    { path: 'course', component: CourseComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });