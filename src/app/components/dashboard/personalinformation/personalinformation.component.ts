import { PersonalData } from './../../models/personaldata.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styles: []
})
export class PersonalinformationComponent implements OnInit {

  personalinfoForm: FormGroup;
  message: String = "No existe ningún registro relacionada con la información personal";
  personalData: PersonalData;
  save: boolean = false;

  constructor(private fb: FormBuilder) {
    //TODO: Cargar los datos, llamada a Firebase
    this.personalData = new PersonalData();
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.personalinfoForm = this.fb.group({
      name: new FormControl(this.personalData.name, Validators.required),
      lastname: new FormControl(this.personalData.lastname, Validators.required),
      birthday: new FormControl(this.personalData.birthday, Validators.required),
      phone: new FormControl(this.personalData.phone, Validators.required),
      mail: new FormControl(this.personalData.mail, Validators.required),
      city: new FormControl(this.personalData.city, Validators.required),
      country: new FormControl(this.personalData.country, Validators.required),
      information: new FormControl(this.personalData.information, Validators.required)
    });
    this.personalinfoForm.disable();
  }

  onSubmit() {
    console.log("submit");
  }

  edit(): void {
    this.save = !this.save;
    this.save ? this.personalinfoForm.enable() : this.personalinfoForm.disable();
  }

  //TODO
  isPersonalInfo() {
    return this.personalData != undefined;
  }

}
