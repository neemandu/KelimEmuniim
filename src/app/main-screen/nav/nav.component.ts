import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserRelatedDialogComponent } from '../user-related/user-related-dialog/user-related-dialog.component';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean = false;
  loggedInName: string;

  constructor(public dialog: MatDialog, private userAuthService: UserAuthService) {
  }

  ngOnInit() {
    this.userAuthService.loggedInEmmiter.subscribe((userAttributes) => {
      this.loggedInName = userAttributes.name;
      this.loggedIn = true;
    })
  }

  loginRegister(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '85vh';
    this.dialog.open(UserRelatedDialogComponent, dialogConfig);
  }

  logout(): void {
    this.userAuthService.logOut()
      .then(data => {
        this.loggedInName = undefined;
        this.loggedIn = false;
      })
      .catch(err => console.log(err));
  }

}
