import { Project } from './../components/models/project.model';
import { Experience } from './../components/models/experience.model';
import { Education } from './../components/models/education.model';
import { Course } from './../components/models/course.model';
import { Skill } from './../components/models/skill.model';
import { Observable } from 'rxjs';
import { PersonalData } from './../components/models/personaldata.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Interest } from '../components/models/interest.model';

@Injectable()
export class DashboardService {

  educationList: Education[] = [];
  experienceList: Experience[] = [];


  baseURL = "https://mypagecv-b1174.firebaseio.com";
  personalDataURL: string = `${this.baseURL}/personaldata`;
  skillURL: string = `${this.baseURL}/skill`;
  courseURL: string = `${this.baseURL}/course`;
  interestURL: string = `${this.baseURL}/interest`;
  educationURL: string = `${this.baseURL}/education`;
  experienceURL: string = `${this.baseURL}/experience`;
  projectURL: string = `${this.baseURL}/project`;

  constructor(private http: HttpClient) {
  }

  // ====== PERSONAL DATA =====
  createPersonalData(personalData: PersonalData) {

    let body: string = JSON.stringify(personalData);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.personalDataURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  editPersonalData(personalData: PersonalData) {

    let body: string = JSON.stringify(personalData);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.personalDataURL}/${personalData.id}.json`;

    return this.http.put(
      url,
      body,
      { headers }
    );
  }

  getPersonalData() {
    let url = `${this.personalDataURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  // ====== END PERSONAL DATA =====

  // ====== SKILLS ================
  createSkill(skill: Skill) {

    let body: string = JSON.stringify(skill);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.skillURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  getSkills() {
    let url = `${this.skillURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  deleteSkill(skill: Skill) {
    let url = `${this.skillURL}/${skill.id}.json`;
    return this.http.delete(
      url
    );
  }

  // ====== END SKILLS ================

  // ====== COURSE ================
  createCourse(course: Course) {

    let body: string = JSON.stringify(course);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.courseURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  getCourses() {
    let url = `${this.courseURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  deleteCourse(course: Course) {
    let url = `${this.courseURL}/${course.id}.json`;
    return this.http.delete(
      url
    );
  }

  // ====== END COURSE ================


  // ====== INTERESTS ================

  createInterest(interest: Interest) {
    let body: string = JSON.stringify(interest);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.interestURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  editInterest(interest: Interest) {
    let body: string = JSON.stringify(interest);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.interestURL}/${interest.id}.json`;

    return this.http.put(
      url,
      body,
      { headers }
    );
  }

  getInterest() {
    let url = `${this.interestURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  // ====== END INTEREST ================

  // ====== EDUCATION ===================

  createEducation(education: Education) {
    let body: string = JSON.stringify(education);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.educationURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  editEducation(education: Education) {
    let body: string = JSON.stringify(education);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.educationURL}/${education.id}.json`;

    return this.http.put(
      url,
      body,
      { headers }
    );
  }

  getEducation() {
    let url = `${this.educationURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  deleteEducation(education: Education) {
    let url = `${this.educationURL}/${education.id}.json`;
    return this.http.delete(
      url
    );
  }

  // ====== END EDUCATION ===============

  // ====== EDUCATION ===================

  createExperience(experience: Experience) {
    let body: string = JSON.stringify(experience);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.experienceURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  editExperience(experience: Experience) {
    let body: string = JSON.stringify(experience);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.experienceURL}/${experience.id}.json`;

    return this.http.put(
      url,
      body,
      { headers }
    );
  }

  getExperience() {
    let url = `${this.experienceURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  deleteExperience(experience: Experience) {
    let url = `${this.experienceURL}/${experience.id}.json`;
    return this.http.delete(
      url
    );
  }

  // ====== END EDUCATION ===============

  // ====== SKILLS ================
  createProject(project: Project) {

    let body: string = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = `${this.projectURL}.json`;

    return this.http.post(
      url,
      body,
      { headers }
    );
  }

  getProjects() {
    let url = `${this.projectURL}.json`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url,
      { headers }
    );
  }

  deleteProject(project: Project) {
    let url = `${this.projectURL}/${project.id}.json`;
    return this.http.delete(
      url
    );
  }

  // ====== END SKILLS ================
}
