import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHttpResponse } from '../http.response';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'http://localhost:3300';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IHttpResponse<Student[] | Student>> {
    return this.http.get<IHttpResponse<Student[] | Student>>(this.apiUrl + '/students');
  }

  updateStudent(student: Student): Observable<IHttpResponse<any>> {
    return this.http.put<IHttpResponse<any>>(this.apiUrl + '/student/' + student.id, student);
  }
}
