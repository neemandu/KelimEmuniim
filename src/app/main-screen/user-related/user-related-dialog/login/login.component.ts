import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // emailRegex = '^[A-Za-z0-9._%+-]+@intel.com$';
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  forgotPasswordForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
  });
  hidePW: boolean = true;
  login: boolean = true;
  showLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * Reset both forms and go back to login form (Parents order after tab change)
   */
  resetForms(): void {
    this.loginForm.reset();
    this.forgotPasswordForm.reset();
    this.login = true;
  }

  onLoginSubmit(): void {
    this.showHideLoading();
  }

  onForgotPasswordSubmit(): void {
    this.showHideLoading();
  }

  showHideLoading(): void {
    this.showLoading = !this.showLoading;
  }
}
