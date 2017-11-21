import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './home.routes';

import { HomeComponent, AddDialogOverview, EditDialogOverview } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    AddDialogOverview,
    EditDialogOverview,
  ],
  entryComponents: [
    AddDialogOverview,
    EditDialogOverview,
  ]
})

export class HomeModule { }
