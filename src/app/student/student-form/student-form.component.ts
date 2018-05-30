import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = fb.group({
      name: [''],
      age: [''],
      dob: [''],
      // image: [''],
    })
  }

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {
  }

}
