import { AuthGuardService } from './services/auth-guard.service';
import { ProjectComponent } from './components/dashboard/projects/project.component';
import { SkillsComponent } from './components/dashboard/skills/skills.component';
import { InterestsComponent } from './components/dashboard/interests/interests.component';
import { EducationComponent } from './components/dashboard/education/education.component';
import { CourseComponent } from './components/dashboard/course/course.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalinformationComponent } from './components/dashboard/personalinformation/personalinformation.component';


export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'personaldata', component: PersonalinformationComponent, canActivate: [AuthGuardService] },
    { path: 'experience', component: ExperienceComponent, canActivate: [AuthGuardService] },
    { path: 'education', component: EducationComponent, canActivate: [AuthGuardService] },
    { path: 'skills', component: SkillsComponent, canActivate: [AuthGuardService] },
    { path: 'interests', component: InterestsComponent, canActivate: [AuthGuardService] },
    { path: 'course', component: CourseComponent, canActivate: [AuthGuardService] },
    { path: 'projects', component: ProjectComponent, canActivate: [AuthGuardService] },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });