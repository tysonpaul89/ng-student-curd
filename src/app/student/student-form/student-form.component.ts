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
      id: null,
      name: '',
      age: '',
      dob: '',
      // image: [''],
    });
  }

  ngOnInit() {
  }

  /**
   * Component life cycle hook that is called when the data in the component is changed
   * @param {SimpleChanges} changes
   */
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

  /**
   * Form submit event
   * @param {string} submitType
   */
  onSubmit(submitType: string) {
    if (submitType.toLowerCase() === 'save') {
      const newStudent: Student = this.studentForm.value;
      // Format the date to YYYY-MM-DD
      newStudent.dob = this.formatDate(newStudent.dob);

      // Creates new student
      this.studentService.createStudent(newStudent)
        .subscribe(this.createAndUpdateResponse);
    } else if (submitType.toLowerCase() === 'update') {
      // Updates existing student
      this.studentService.updateStudent(this.studentForm.value)
      .subscribe(this.createAndUpdateResponse);
    }
  }

  /**
   * To handle response from createStudent and updateStudent services
   * @param {Response} res
   */
  private createAndUpdateResponse = (res) => {
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
  }

  /**
   * To reset form
   */
  resetForm() {
    this.studentForm.reset();
    delete this.editStudent;
    this.buttonText = 'Save';
  }

  /**
   * Converts the given date to YYYY-MM-DD format
   * @param {string} date Date to format
   */
  private formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

}
