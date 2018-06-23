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
   * @param student Student who clicked to edit
   */
  fillStudentForm(student: Student) {
    this.student = student;
  }

  /**
   * Deletes the student
   * @param id Student ID to delete
   */
  deleteStudent(id: number) {
    console.log(id);
    // TODO: delete functionality
    this.router.navigate(['']);
  }

  /**
   * To display alert message when the
   * EventEmitter emits data from the child component
   */
  alertMessage(alertMsg) {
    this.alert = alertMsg;
  }

  event1Func(temp) {
    console.log('event1Func: ', temp);
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
   */
  reloadStudentList(isReload) {
    if (isReload) {
      this.listStudents();
    }
  }

}
