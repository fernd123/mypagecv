import { NgForm } from '@angular/forms';
import { Education } from './../../../models/education.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styles: []
})
export class AddeducationComponent implements OnInit {

  educationModel: Education = new Education();

  constructor() { }

  ngOnInit() {
  }


}
