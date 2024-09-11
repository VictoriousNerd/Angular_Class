import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: string[];
  selectedStudent: string | undefined;
  studentGrade: string | undefined;
  showDetails: boolean = false;
  gradeMessage: string = '';

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onGradeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.studentGrade = target.value;
    if (this.studentGrade === 'A') {
      this.gradeMessage = 'Perfect';
    } else if (this.studentGrade === 'B') {
      this.gradeMessage = 'Above Average';
    } else if (this.studentGrade === 'C') {
      this.gradeMessage = 'Average';
    } else if (this.studentGrade === 'D') {
      this.gradeMessage = 'Below Average';
    } else if (this.studentGrade === 'F') {
      this.gradeMessage = 'Failing';
    }
  }
}
