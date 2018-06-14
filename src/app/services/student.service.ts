import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable()
export class StudentService {

  students: Student[] = [];

  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get('http://localhost/student-curd-api/web/index.php?r=student/get-students').subscribe((res) => {
     console.log(res);
      return this.students;
    });
  }

}
