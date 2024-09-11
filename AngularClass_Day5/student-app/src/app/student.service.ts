import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: string[] = ['Alice', 'Bob', 'Charlie'];
  
  getStudents(): string[] {
    return this.students;
  }
}
