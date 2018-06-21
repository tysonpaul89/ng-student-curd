import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() editStudent: Student;
  studentForm: FormGroup;
  buttonText = 'Save';

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: '',
      age: '',
      dob: '',
      // image: [''],
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.editStudent.firstChange) {
      const currentStudent: Student = changes.editStudent.currentValue;
      this.studentForm.setValue({
        name: currentStudent.name,
        age: currentStudent.age,
        dob: currentStudent.dob
      });
      this.buttonText = 'Update';
    }
  }

  onSubmit() {
    console.log(this.editStudent);
    console.log(this.studentForm.value);
  }

  resetForm() {
    this.studentForm.reset();
    delete this.editStudent;
    this.buttonText = 'Save';
  }

}
