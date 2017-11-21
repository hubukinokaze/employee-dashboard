import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

@Component ({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public username: string;
  public password: string;
  public isLoading: boolean;

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
    this.isLoading = false;
  }

  public login() {
    this.isLoading = true;
    this.userService.login(this.username, this.password).subscribe(
      data => {this.router.navigate(['/home']); this.isLoading = false},
      err => {this.snackBar.open('Incorrect username and/or password', 'Dismiss',{duration: 2500}); this.isLoading = false;},
    );
  }

  public goToSignup() {
    this.router.navigate(['/signup']);
  }
}
