import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  student: Student;

  constructor(private studentService: StudentService, private router: Router) {
    // this.studentService.getStudents();
    this.students = [
      new Student({id: 1, name: 'Tyson', age: 28, dob: '1989-07-20'}),
      new Student({id: 2, name: 'Seethu', age: 28, dob: '1989-09-14'})
    ];
  }

  ngOnInit() {
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

}
