import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    name: ['',Validators.required],
    lastName: ['',Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  hidePW: boolean = true;
  showLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * Reset form (Parents order after tab change)
   */
  resetForms(): void {
    this.registerForm.reset();
  }

  onRegisterSubmit(): void {
    this.showHideLoading();
  }

  showHideLoading(): void {
    this.showLoading = !this.showLoading;
  }
}
