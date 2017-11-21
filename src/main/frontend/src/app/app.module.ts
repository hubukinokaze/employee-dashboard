import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PagesModule } from './components/pages.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { ScrollPositionDirective } from './theme/directives/scrollPosition.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollPositionDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
