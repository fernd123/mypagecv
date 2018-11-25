import { AppConstants } from './../../../app.constants';
import { DashBoardParent } from './../../models/dashboardparent.model';
import { DashboardService } from './../../../services/dashboard.service';
import { Experience } from './../../models/experience.model';
import { FormBuilder, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent extends DashBoardParent implements OnInit {

  experienceModel: Experience = new Experience();
  experienceFormDisabled: boolean = true;

  constructor(private fb: FormBuilder,
    public dashBoardService: DashboardService) {
    super();
    this.refreshExperienceList();
  }

  ngOnInit() { }


  add(experienceForm: NgForm) {

  }

  saveForm(experienceForm: NgForm, id: string) {
    this.loading = true;
    experienceForm.value.id = id;
    this.dashBoardService.editExperience(experienceForm.value).subscribe(data => {
      console.log(data);
      experienceForm.form.disable();
      this.experienceFormDisabled = true;
      this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
      this.refreshExperienceList();
      this.loading = false;
    });
  }

  cancel(experienceForm: NgForm, id: string) {
    experienceForm.form.disable();
    this.experienceFormDisabled = true;
  }

  editForm(experienceForm: NgForm, id: string) {
    experienceForm.form.enable();
    this.experienceFormDisabled = false;
  }

  remove(experienceForm: NgForm, id: string) {
    this.loading = true;
    experienceForm.value.id = id;
    this.dashBoardService.deleteExperience(experienceForm.value).subscribe(data => {
      this.dashBoardService.experienceList = [];
      experienceForm.form.disable();
      this.experienceFormDisabled = true;
      this.setMessage(this.appConstants.messageDeleteOk, this.appConstants.classSuccess);
      this.refreshExperienceList();
      this.loading = false;
    });

  }

  onSubmit(experienceForm: NgForm) {
    experienceForm.form.disable();
    this.experienceFormDisabled = true;
  }

  refreshExperienceList(): void {
    this.loading = true;
    this.dashBoardService.getExperience().subscribe((data: any) => {
      this.dashBoardService.experienceList = [];
      if (data != null)
        for (let i in data) {
          data[i].id = i;
          this.dashBoardService.experienceList.push(data[i]);
        }
      this.loading = false;
      this.dashBoardService.experienceList.length == 0 ? this.setMessage(this.appConstants.messageNoExperienceInfo, this.appConstants.classWarning) : true;
    });
  }

}