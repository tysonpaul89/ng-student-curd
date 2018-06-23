import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { IAlert } from '../../alert';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() editStudent: Student;
  @Output() alertEvent = new  EventEmitter<IAlert>();
  @Output() studentDataChanges = new EventEmitter<boolean>();
  studentForm: FormGroup;
  buttonText = 'Save';

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      id: '',
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
        id: currentStudent.id,
        name: currentStudent.name.trim(),
        age: currentStudent.age,
        dob: currentStudent.dob.trim()
      });
      this.buttonText = 'Update';
    }
  }

  onSubmit(submitType: string) {
    if (submitType.toLowerCase() === 'save') {
      console.log('TODO: Save new user');
    } else if (submitType.toLowerCase() === 'update') {
      this.studentService.updateStudent(this.studentForm.value)
      .subscribe(res => {
        // To show update success/failure message
        if (res.status) {
          // Emitting event to reload the student listing
          this.studentDataChanges.emit(true);

          this.alertEvent.emit({
            type: 'success',
            message: res.message,
            dismissible: true,
          });
        } else {
          this.alertEvent.emit({
            type: 'danger',
            message: res.message,
            dismissible: true,
          });
        }
      });
    }
  }

  resetForm() {
    this.studentForm.reset();
    delete this.editStudent;
    this.buttonText = 'Save';
  }

}
