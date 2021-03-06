import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  @Output() loggedInEmmiter: EventEmitter<any> = new EventEmitter<any>();
  
  loggedInAttributes: any;

  constructor(public _snackBar: MatSnackBar) {
    Auth.currentAuthenticatedUser().then(userData => {
      this.loggedInAttributes = userData.attributes;
      this.loggedInEmmiter.emit(userData.attributes);
      // console.log(userData)
    })
      .catch(err => console.log(err));
  }

  /**
   * Preform sign up process
   * @param newUser - new user data (name, lname, username (email), password)
   */
  signUp(newUser): Promise<any> {
    return Auth.signIn(newUser);
  }

  /**
   * Preform log in using User data
   * @param user - all user data to log in 
   */
  logIn(user): Promise<any> {
    return Auth.signIn(user);
  }

  /**
   * After succesful log in, save cookies and let all components know we logged in 
   * @param userData - data returned from the BE for the user (tokens etc')
   */
  loggedIn(userData: any): void {
    this.loggedInAttributes = userData.attributes;
    this.loggedInEmmiter.emit(userData.attributes);
  }

  /**
   * Check username (email) and send varification email with code
   * @param user - username (email) to reset password for
   */
  forgotPasswordVarifyEmail(user): Promise<any> {
    return Auth.forgotPassword(user)
  }

  /**
   * After receiving email with verification code, create a new password
   * @param user - username (email)
   * @param confirmationCode - code received via email
   * @param newPassword 
   */
  forgotPasswordReset(user, confirmationCode, newPassword): Promise<any> {
    return Auth.forgotPasswordSubmit(user, confirmationCode, newPassword);
  }

  logOut(): Promise<any> {
    return Auth.signOut();
  }

}
