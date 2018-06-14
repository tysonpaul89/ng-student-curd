import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { StudentService } from './services/student.service';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'create-student', component: StudentFormComponent },
  { path: 'edit-student/:id', component: StudentFormComponent },
  { path: 'view-student/:id', component: StudentViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentViewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    StudentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
