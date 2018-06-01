import { Education } from './../../models/education.model';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styles: []
})
export class EducationComponent implements OnInit {

  message: String = "No existe ningún registro relacionada con la experiencia";
  
  educationList: Education[] = [];
  educationModel: Education = new Education();

  constructor(private fb: FormBuilder) {
    //this.createForm();
    for (let i = 0; i < 3; i++) {
      let e: Education = new Education();
      e.id = i + "ID";
      e.place = "A" + i;
      e.degree = "B" + i;
      e.datefrom = new Date();
      e.dateto = new Date();
      e.description = "Description Example";
      this.educationList.push(e);
    }
  }

  ngOnInit() { }

  add(educationForm: NgForm){
    console.log(educationForm.value);
    debugger;
  }

  save(educationForm: NgForm, id:string){
    educationForm.form.disable();
  }
  
  cancel(educationForm: NgForm, id:string){
    educationForm.form.disable();
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
