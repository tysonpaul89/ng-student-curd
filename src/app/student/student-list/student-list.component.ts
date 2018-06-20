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

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getStudents();
    this.students = [
      new Student({id: 1, name: 'Tyson', age: 28, dob: '1989-07-20'}),
      new Student({id: 2, name: 'Seethu', age: 28, dob: '1989-09-14'})
    ];
  }

  ngOnInit() {
  }

  deleteStudent(id: number) {
    console.log(id);
    // TODO: delete functionality
    this.router.navigate(['']);
  }

}
