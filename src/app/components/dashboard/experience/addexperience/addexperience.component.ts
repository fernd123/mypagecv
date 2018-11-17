import { Experience } from './../../../models/experience.model';
import { Router } from '@angular/router';
import { DashBoardParent } from './../../../models/dashboardparent.model';
import { AppConstants } from './../../../../app.constants';
import { DashboardService } from './../../../../services/dashboard.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styles: []
})
export class AddexperienceComponent extends DashBoardParent implements OnInit {

  experienceModel: Experience = new Experience();

  @ViewChild('buttonfer') buttonfer;

  constructor(private dashBoardService: DashboardService,
    private router: Router,
    private _location: Location) {
    super();
  }

  ngOnInit() {
  }

  add(experienceForm: NgForm) {
    this.buttonfer.nativeElement.click();
    this.dashBoardService.createExperience(experienceForm.value).subscribe(
      data => {
        console.log(data);
        this.experienceModel = new Experience();
        this.refreshExperienceList();
      },
      error => {

      }
    );
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
