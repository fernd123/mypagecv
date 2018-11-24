import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  loginForm: FormGroup;
  user: any = {email: '', password: ''};

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(this.user.email, Validators.required),
      password: new FormControl(this.user.password, Validators.required)
    });
  }

  onSubmit(): void {

  }

  ngOnInit() {
  }
}

