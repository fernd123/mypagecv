import { AppConstants } from './../../app.constants';
import { Skill } from './../models/skill.model';
import { Course } from './../models/course.model';
import { Education } from './../models/education.model';
import { PersonalData } from './../models/personaldata.model';
import { Interest } from './../models/interest.model';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../models/experience.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  appConstants: AppConstants = new AppConstants();
  personalData: PersonalData[] = [];
  educationList: Education[] = [];
  experienceList: Experience[] = [];
  skillList: Skill[] = [];
  interestList: Interest[] = [];
  courseList: Course[] = [];
  projectList: Project[] = [];


  loading: boolean = true;

  constructor(private router: Router,
    public dashBoardService: DashboardService) {
    this.loading = true;
  }

  ngOnInit() {
    let educationGet: any = this.dashBoardService.getEducation();
    let experienceGet: any = this.dashBoardService.getExperience();
    let interestGet: any = this.dashBoardService.getInterest();
    let courseGet: any = this.dashBoardService.getCourses();
    let skillGet: any = this.dashBoardService.getSkills();
    let personalDataGet: any = this.dashBoardService.getPersonalData();
    let projectGet: any = this.dashBoardService.getProjects();

    forkJoin(educationGet, experienceGet, interestGet, courseGet, skillGet, personalDataGet, projectGet).subscribe((data: any) => {
      if (data != null) {

        if (data[0] != null) {
          for (let i in data[0]) {
            data[0][i].id = i;
            this.educationList.push(data[0][i]);
          }
        }

        if (data[1] != null) {
          for (let i in data[1]) {
            data[1][i].id = i;
            this.experienceList.push(data[1][i]);
          }
        }

        if (data[2] != null) {
          for (let i in data[2]) {
            data[2][i].id = i;
            this.interestList.push(data[2][i]);
          }
        }

        if (data[3] != null) {
          for (let i in data[3]) {
            data[3][i].id = i;
            this.courseList.push(data[3][i]);
          }
        }

        if (data[4] != null) {
          for (let i in data[4]) {
            data[4][i].id = i;
            this.skillList.push(data[4][i]);
          }
        }

        if (data[5] != null) {
          for (let i in data[5]) {
            data[5][i].id = i;
            this.personalData.push(data[5][i]);
          }
        }

        if (data[6] != null) {
          for (let i in data[6]) {
            data[6][i].id = i;
            this.projectList.push(data[6][i]);
          }
        }

        this.loading = false;
      }
    }
    );
  }

  internalRoute(location) {
    window.location.hash = '';
    window.location.hash = location;
  }

  getSkillsByCategory(category: String){
    let skillsCategoryList:Skill[] = [];
    for(let i=0; i<this.skillList.length; i++){
      if(this.skillList[i].category == category){
        skillsCategoryList.push(this.skillList[i]);
      }
    }
    return skillsCategoryList;
  }

}
