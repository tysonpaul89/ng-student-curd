import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';
import { IHttpResponse } from '../../http.response';
import { IAlert } from '../../alert';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {
  students: Student[];
  student: Student;
  alert: IAlert;

  constructor(private studentService: StudentService, private router: Router) {
    this.listStudents();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  /**
   * To list student details
   */
  listStudents() {
    // Gets the students list
    this.studentService.getStudents()
      .subscribe((res: IHttpResponse<Student[]>) => {
        this.students = res.data;
      });
  }

  /**
   * Fills the clicked student data into the form
   * @param {Student} student Student who clicked to edit
   */
  fillStudentForm(student: Student) {
    this.student = student;
  }

  /**
   * Deletes the student
   * @param {number} id Student ID to delete
   */
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe((res) => {
        if (res.status) {
          //To reload the student listing
          this.reloadStudentList(true);

          this.alertMessage({
            type: 'success',
            message: res.message,
            dismissible: true,
          });
        } else {
          this.alertMessage({
            type: 'danger',
            message: res.message,
            dismissible: true,
          });
        }
      });
  }

  /**
   * To display alert message when the
   * EventEmitter emits data from the child component
   * @param {IAlert} alertMsg Data to show in boostrap alert box
   */
  alertMessage(alertMsg: IAlert) {
    this.alert = alertMsg;
  }

  /**
   * To delete the current alert message data after it is
   * disappear from the page
   */
  alertClose() {
    delete this.alert;
  }

  /**
   * Reloads the student listing
   * @param {boolean} isReload Flag variable to call list student service
   */
  reloadStudentList(isReload) {
    if (isReload) {
      this.listStudents();
    }
  }

}
