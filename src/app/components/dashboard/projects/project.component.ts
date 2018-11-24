import { Project } from './../../models/project.model';
import { DashBoardParent } from '../../models/dashboardparent.model';
import { DashboardService } from '../../../services/dashboard.service';
import { Skill } from '../../models/skill.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent extends DashBoardParent implements OnInit {

  projectForm: FormGroup;
  project: Project;
  projectList: Project[] = [];

  constructor(private fb: FormBuilder, private dashBoardService: DashboardService
  ) {
    super();
    this.project = new Project();
    this.createForm();
    this.refreshProjectList();
  }

  ngOnInit() {
  }

  createForm() {
    this.projectForm = this.fb.group({
      name: new FormControl(this.project.name, Validators.required),
      url: new FormControl(this.project.url, Validators.required),
      description: new FormControl(this.project.description, Validators.required)
    });
    if (this.isGuest) {
      this.projectForm.disable();
    }
  }

  refreshProjectList(): void {
    this.loading = true;
    this.dashBoardService.getProjects().subscribe((data: any) => {
      this.projectList = [];
      if (data != null)
        for (let i in data) {
          data[i].id = i;
          this.projectList.push(data[i]);
          this.projectForm.get('name').setValue('');
          this.projectForm.get('description').setValue('');
          this.projectForm.get('url').setValue('');
        }
      this.loading = false;
    });
  }

  onSubmit(): void {
    this.dashBoardService.createProject(this.projectForm.value).subscribe(
      data => {
        console.log(data);
        this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
        this.refreshProjectList();
      },
      error => {

      }
    );
  }

  delete(project: Project): void {
    this.dashBoardService.deleteProject(project).subscribe(data => {
      this.refreshProjectList();
    });
  }

}
