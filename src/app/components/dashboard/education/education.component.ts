import { Router } from '@angular/router';
import { AppConstants } from './../../../app.constants';
import { DashboardService } from './../../../services/dashboard.service';
import { DashBoardParent } from './../../models/dashboardparent.model';
import { Education } from './../../models/education.model';
import { NgForm, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styles: []
})
export class EducationComponent extends DashBoardParent implements OnInit {

  educationModel: Education = new Education();
  educationFormDisabled: boolean = true;

  constructor(private fb: FormBuilder,
    public dashBoardService: DashboardService) {
    super();
    this.refreshEducationList();
  }

  ngOnInit() { }


  add(educationForm: NgForm) {

  }

  saveForm(educationForm: NgForm, id: string) {
    this.loading = true;
    educationForm.value.id = id;
    this.dashBoardService.editEducation(educationForm.value).subscribe(data => {
      console.log(data);
      educationForm.form.disable();
      this.educationFormDisabled = true;
      this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
      this.refreshEducationList();
      this.loading = false;
    });
  }

  cancel(educationForm: NgForm, id: string) {
    educationForm.form.disable();
    this.educationFormDisabled = true;
  }

  editForm(educationForm: NgForm, id: string) {
    if(!environment.isGuest){
      educationForm.form.enable();
      this.educationFormDisabled = false;
    }
  }

  remove(educationForm: NgForm, id: string) {
    this.loading = true;
    educationForm.value.id = id;
    this.dashBoardService.deleteEducation(educationForm.value).subscribe(data => {
      this.dashBoardService.educationList = [];
      educationForm.form.disable();
      this.educationFormDisabled = true;
      this.setMessage(this.appConstants.messageDeleteOk, this.appConstants.classSuccess);
      this.refreshEducationList();
      this.loading = false;
    });

  }

  onSubmit(experienceForm: NgForm) {
    experienceForm.form.disable();
    this.educationFormDisabled = true;
  }

  refreshEducationList(): void {
    this.loading = true;
    this.dashBoardService.getEducation().subscribe((data: any) => {
      this.dashBoardService.educationList = [];
      if (data != null)
        for (let i in data) {
          data[i].id = i;
          this.dashBoardService.educationList.push(data[i]);
        }
      this.loading = false;
      this.dashBoardService.educationList.length == 0 ? this.setMessage(this.appConstants.messageNoExperienceInfo, this.appConstants.classWarning) : true;
    });
  }

}
