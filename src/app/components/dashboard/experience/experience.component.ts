import { Experience } from './../../models/experience.model';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent implements OnInit {

  experienceForm: FormGroup;
  message: String = "No existe ningún registro relacionada con la experiencia";
  
  experienceList: Experience[] = [];

  constructor(private fb: FormBuilder) {
    //this.createForm();
    for (let i = 0; i < 3; i++) {
      let e: Experience = new Experience();
      e.id = i + "ID";
      e.role = "A" + i;
      e.company = "B" + i;
      e.datefrom = new Date();
      e.dateto = new Date();
      e.description = "Description Example";
      this.experienceList.push(e);
    }
  }

  ngOnInit() { }

  add(){
    
  }

  save(experienceForm: NgForm, id:string){
    experienceForm.form.disable();
  }
  
  cancel(experienceForm: NgForm, id:string){
    experienceForm.form.disable();
  }
  
  edit(experienceForm: NgForm, id:string){
    experienceForm.form.enable();
  }

  remove(experienceForm: NgForm, id:string){
    alert('Se va a borrar');
  }

  onSubmit(experienceForm: NgForm) {
    experienceForm.form.disable();
  }

}
