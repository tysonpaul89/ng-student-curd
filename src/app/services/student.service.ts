import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students: Student[] = [];
  apiUrl = 'http://localhost:3300';

  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get(this.apiUrl + '/students').subscribe((res) => {
     console.log(res);
      // return this.students;
    });
  }

}
