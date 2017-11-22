import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public goToUrl() {
    window.location.href = 'https://github.com/hubukinokaze/employee-dashboard';
  }
}
