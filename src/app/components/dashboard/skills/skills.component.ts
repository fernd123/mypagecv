import { Skill } from './../../models/skill.model';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {

  skillsForm: FormGroup;
  skill: Skill;

  constructor(private fb: FormBuilder) {
    this.skill = new Skill();
    this.skill.category = "Lenguajes Programación";
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.skillsForm = this.fb.group({
      category: new FormControl(this.skill.category, Validators.required),
      description: new FormControl(this.skill.description, Validators.required)
    });
  }

  onSubmit(): void {

  }

  delete(): void {

  }

}
