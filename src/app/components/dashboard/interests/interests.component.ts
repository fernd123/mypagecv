import { AppConstants } from './../../../app.constants';
import { DashBoardParent } from './../../models/dashboardparent.model';
import { DashboardService } from './../../../services/dashboard.service';
import { DashboardComponent } from './../dashboard.component';
import { Interest } from './../../models/interest.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styles: []
})
export class InterestsComponent extends DashBoardParent implements OnInit {

  interest: Interest;
  interestForm: FormGroup;
  save: boolean = false;

  constructor(private fb: FormBuilder,
    private dashboardService: DashboardService) {
    super();
    this.interest = new Interest();
    this.createForm();
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.loading = true;
    this.dashboardService.getInterest().subscribe(data => {
      if (data != null) {
        for (let i in data) {
          this.interest = data[i];
          this.interest.id = i;
        }
        this.interestForm.setValue(this.interest);
        this.loading = false;
      }
    })
  }

  createForm() {
    this.interestForm = this.fb.group({
      description: new FormControl({ value: this.interest.description, disabled: true }, [Validators.required]),
      id: new FormControl({ value: this.interest.id, disabled: true })
    });
  }

  onSubmit(): void {
    this.interest = this.interestForm.value;
    if (this.interest.id == null) {
      this.dashboardService.createInterest(this.interest).subscribe(
        (data: any) => {
          this.interest.id = data.name;
          this.edit(this.interestForm);
          this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
          console.log(data);
        },
        error => {

        }
      );
    } else {
      this.dashboardService.editInterest(this.interest).subscribe(
        (data: any) => {
          this.interest.id = data.name;
          console.log(data);
          this.edit(this.interestForm);
          this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
        },
        error => {

        }
      );
    }
  }
}
