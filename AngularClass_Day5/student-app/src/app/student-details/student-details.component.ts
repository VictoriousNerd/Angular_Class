import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() studentName: string | undefined;
  @Input() studentGrade: string | undefined;
}
