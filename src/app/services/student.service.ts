import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Student } from '../models/student';

@Injectable()
export class StudentService {

  students:Student[] = [];

  constructor(private http: Http) { }

  getStudents() {
    this.http.get('http://localhost/student-curd-api/web/index.php?r=student/get-students').subscribe((res: Response) => {
      res.json().forEach(studentObj => {
        this.students.push(new Student(studentObj));
      });
      return this.students;
    })
  }

}
