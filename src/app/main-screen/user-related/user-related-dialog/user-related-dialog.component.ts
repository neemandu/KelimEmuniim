import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-user-related-dialog',
  templateUrl: './user-related-dialog.component.html',
  styleUrls: ['./user-related-dialog.component.css']
})
export class UserRelatedDialogComponent implements OnInit {

  // showSpinner: boolean = true;
  @ViewChild(LoginComponent, { static: false }) loginChild: LoginComponent;
  @ViewChild(RegisterComponent, { static: false }) registerChild: RegisterComponent;


  constructor() { }

  ngOnInit(): void {
  }

  tabChanged(event: any): void {
    this.loginChild.resetForms();
    this.registerChild.resetForms();
  }
}
