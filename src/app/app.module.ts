import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentViewComponent } from './student/student-view/student-view.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
