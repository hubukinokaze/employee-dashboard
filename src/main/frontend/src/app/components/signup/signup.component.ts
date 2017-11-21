import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

@Component ({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})

export class SignupComponent {
  public username: string;
  public password: string;
  public passwordConfirm: string;
  public isLoading: boolean;

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar){
    this.username = "";
    this.password = "";
    this.passwordConfirm = "";
    this.isLoading = false;
  }

  signup() {
    this.isLoading = true;
    if (this.checkIfEmpty() && this.checkPasswordMatch()) {
      let user = {
        username: this.username,
        password: this.password,
        date: new Date().toISOString()
      }
      this.userService.createUser(user).subscribe(
        data => {this.router.navigate(['/home']); this.isLoading = false},
        err => {this.snackBar.open('Something went wrong. Try again.', 'Dismiss',{duration: 2500}); this.isLoading = false;},
      );
    } else {
      this.isLoading = false;
    }

  }

  private checkIfEmpty(): boolean {
    console.log(this.username !== "" && this.password !== "" && this.passwordConfirm !== "");
    if (this.username !== "" && this.password !== "" && this.passwordConfirm !== "") {
      return true;
    }
    this.snackBar.open('Incorrect username and/or password', 'Dismiss', {duration: 3000});
    return false;
  }

  private checkPasswordMatch() {
    if (this.password === this.passwordConfirm) {
      return true;
    }
    this.password = "";
    this.passwordConfirm = "";
    this.snackBar.open('Passwords do NOT match', 'Dismiss', {duration: 3000});
    return false;
  }

  goToLogin(): void {
    this.router.navigate(['']);
  }

}
