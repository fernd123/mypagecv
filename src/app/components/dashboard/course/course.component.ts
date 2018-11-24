import { AppConstants } from './../../../app.constants';
import { DashBoardParent } from './../../models/dashboardparent.model';
import { DashboardComponent } from './../dashboard.component';
import { DashboardService } from './../../../services/dashboard.service';
import { Course } from './../../models/course.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent extends DashBoardParent implements OnInit {

  courseForm: FormGroup;
  course: Course;
  courseList: Course[] = [];

  constructor(private fb: FormBuilder,
    private dashboardService: DashboardService) {
    super();
    this.course = new Course();
    this.course.type = "Curso";
    this.createForm();
    this.refreshCourseList();
  }

  ngOnInit() {
  }

  createForm() {
    this.courseForm = this.fb.group({
      type: new FormControl(this.course.type, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      place: new FormControl(this.course.place, Validators.required)
    });

    if(environment.isGuest){
      this.courseForm.disable();
    }
  }

  refreshCourseList(): void {
    this.loading = true;
    this.dashboardService.getCourses().subscribe((data: any) => {
      this.courseList = [];
      if (data != null)
        for (let i in data) {
          data[i].id = i;
          this.courseList.push(data[i]);
        }
      this.loading = false;
    });

  }

  onSubmit(): void {
    this.dashboardService.createCourse(this.courseForm.value).subscribe(
      data => {
        console.log(data);
        this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
        this.refreshCourseList();
      },
      error => {

      }
    )
  }

  delete(course: Course): void {
    this.dashboardService.deleteCourse(course).subscribe(data => {
      this.refreshCourseList();
    });
  }

}
