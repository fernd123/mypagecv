import { Interest } from './../../models/interest.model';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styles: []
})
export class InterestsComponent implements OnInit {

  interest: Interest;
  interestForm: FormGroup;
  save: boolean = false;

  constructor(private fb: FormBuilder) {
    this.interest = new Interest();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.interestForm = this.fb.group({
      description: new FormControl({ value: this.interest.description, disabled: true }, [Validators.required])
    });
  }

  edit(): void {
    this.save = !this.save;
    this.save ? this.interestForm.get('description').enable() : this.interestForm.get('description').disable();
  }

  onSubmit(courseForm: NgForm): void {

  }
}
