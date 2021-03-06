import { Router } from '@angular/router';
import { DashBoardParent } from './../../../models/dashboardparent.model';
import { AppConstants } from './../../../../app.constants';
import { DashboardService } from './../../../../services/dashboard.service';
import { NgForm } from '@angular/forms';
import { Education } from './../../../models/education.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styles: []
})
export class AddeducationComponent extends DashBoardParent implements OnInit {

  educationModel: Education = new Education();
  educationList: Education[] = [];
  @ViewChild('buttonfer') buttonfer;

  constructor(private dashBoardService: DashboardService,
    private router: Router,
    private _location: Location) {
    super();
  }

  ngOnInit() {
  }

  add(educationForm: NgForm) {
    this.buttonfer.nativeElement.click();
    this.dashBoardService.createEducation(educationForm.value).subscribe(
      data => {
        console.log(data);
        this.educationModel = new Education();
        this.refreshEducationList();
      },
      error => {

      }
    );
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
