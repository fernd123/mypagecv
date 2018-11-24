import { DashBoardParent } from './../../models/dashboardparent.model';
import { DashboardService } from './../../../services/dashboard.service';
import { Skill } from './../../models/skill.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent extends DashBoardParent implements OnInit {

  skillsForm: FormGroup;
  skill: Skill;
  skillList: Skill[] = [];

  constructor(private fb: FormBuilder, private dashBoardService: DashboardService
  ) {
    super();
    this.skill = new Skill();
    this.skill.category = "Lenguajes Programación";
    this.createForm();
    this.refreshSkillList();
  }

  ngOnInit() {
  }

  createForm() {
    this.skillsForm = this.fb.group({
      category: new FormControl(this.skill.category, Validators.required),
      description: new FormControl(this.skill.description, Validators.required)
    });

    if(this.isGuest){
      this.skillsForm.disable();
    }
  }

  refreshSkillList(): void {
    this.loading = true;
    this.dashBoardService.getSkills().subscribe((data: any) => {
      this.skillList = [];
      if (data != null)
        for (let i in data) {
          data[i].id = i;
          this.skillList.push(data[i]);
          this.skillsForm.get('description').setValue('');
        }
        this.loading = false;
    });
  }

  onSubmit(): void {
    this.dashBoardService.createSkill(this.skillsForm.value).subscribe(
      data => {
        console.log(data);
        this.setMessage(this.appConstants.messageSuccessPersonalInfo, this.appConstants.classSuccess);
        this.refreshSkillList();
      },
      error => {

      }
    );
  }

  delete(skill: Skill): void {
    this.dashBoardService.deleteSkill(skill).subscribe(data => {
      this.refreshSkillList();
    });
  }

}
