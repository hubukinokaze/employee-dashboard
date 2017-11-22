import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,
  MatTableModule, MatProgressBarModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatListModule,
  MatSnackBarModule, MatTooltipModule, MatCardModule, MatMenuModule
} from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

import { EmployeeService } from "../services/employee.service";
import { UserService } from "../services/user.service";

import { HighlightCodeDirective } from './directives/highlight.directive';

const SHARED_MODULES = [
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatCardModule,
  MatMenuModule,
];

const SHARED_COMPONENTS = [
  NavbarComponent,
  HeaderComponent,
];

const SHARED_SERVICES = [
  UserService,
  EmployeeService,
]

const SHARED_DIRECTIVES = [
  HighlightCodeDirective,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ...SHARED_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
  providers: [
    ...SHARED_SERVICES,
  ]
})
export class SharedModule { }
