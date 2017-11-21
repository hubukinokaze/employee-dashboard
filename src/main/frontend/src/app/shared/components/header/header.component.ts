import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Input() tagline: string = 'Smart data table with sorting, filtering, pagination & add/edit/delete functions.';

}
