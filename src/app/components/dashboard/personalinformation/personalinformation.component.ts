import { DashBoardParent } from './../../models/dashboardparent.model';
import { AppConstants } from './../../../app.constants';
import { DashboardService } from './../../../services/dashboard.service';
import { PersonalData } from './../../models/personaldata.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styles: []
})
export class PersonalinformationComponent extends DashBoardParent implements OnInit {

  personalinfoForm: FormGroup;
  personalData: PersonalData = new PersonalData();

  constructor(private fb: FormBuilder,
    private dashboardService: DashboardService) {
    super();
    this.createForm();
    this.getData();
  }

  ngOnInit() { }

  createForm(): void {
    this.personalinfoForm = this.fb.group({
      name: new FormControl(this.personalData.name, Validators.required),
      lastname: new FormControl(this.personalData.lastname, Validators.required),
      birthday: new FormControl(this.personalData.birthday, Validators.required),
      phone: new FormControl(this.personalData.phone, Validators.required),
      mail: new FormControl(this.personalData.mail, Validators.required),
      city: new FormControl(this.personalData.city, Validators.required),
      country: new FormControl(this.personalData.country, Validators.required),
      information: new FormControl(this.personalData.information, Validators.required),
      id: new FormControl(this.personalData.id)
    });
    this.personalinfoForm.disable();
  }

  getData(): void {
    this.dashboardService.getPersonalData().subscribe((data: Object) => {
      // Solo debe haber 1 registro
      for (let i in data) {
        this.personalData = data[i];
        this.personalData.id = i;
      }
      this.personalinfoForm.setValue(this.personalData);
      this.personalData.id == undefined ? this.setMessage(this.appConstants.messageNoPersonalInfo, this.appConstants.classWarning) : true;
      this.loading = false;
    });
  }

  onSubmit() {
    if (this.personalData.id == undefined || this.personalData.id == null) {
      this.dashboardService.createPersonalData(this.personalinfoForm.value)
        .subscribe(
          data => {
            this.edit(this.personalinfoForm);
            this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
          },
          error => { });
    } else {
      this.dashboardService.editPersonalData(this.personalinfoForm.value)
        .subscribe(
          data => {
            this.edit(this.personalinfoForm);
            this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
          },
          error => { });
    }
  }

}
