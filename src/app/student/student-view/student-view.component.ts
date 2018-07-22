import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { IHttpResponse } from '../../http.response';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  student: Student;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.studentService.getStudent(params['id']).subscribe(
        (res: IHttpResponse<Student>) => {
          this.student = res.data;
        }
      );
    });
  }

}
