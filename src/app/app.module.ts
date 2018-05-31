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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    PersonalinformationComponent,
    ExperienceComponent
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
