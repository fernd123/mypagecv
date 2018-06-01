import { Course } from './../../models/course.model';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  courseForm: FormGroup;
  course: Course;

  constructor(private fb: FormBuilder) {
    this.course = new Course();
    this.course.type = "Curso";
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.courseForm = this.fb.group({
      type: new FormControl(this.course.type, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      place: new FormControl(this.course.place, Validators.required)
    });
  }

  onSubmit(): void {

  }

  delete(): void {

  }

}
