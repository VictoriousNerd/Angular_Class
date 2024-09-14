import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  courses: Course[] = [
    { id: 1, name: 'Angular Developer', description: 'After completing this course, the student will understand and learn to apply Angular concepts. Comfortably be able to work with expanded HTML and speed up work application responsiveness while developing a web-based application using Angular technology.', duration: '2 weeks', fees: '$200' },
    { id: 2, name: 'C# .NET, ASP .NET', description: 'This course teaches Object oriented programming in C# language. C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.', duration: '2 weeks', fees: '$200' },
    { id: 3, name: 'JavaScript', description: 'This hands-on JavaScript training course provides the fundamental knowledge necessary to design and develop dynamic Web pages using JavaScript.', duration: '1 weeks', fees: '$100' },
    { id: 4, name: 'Asp.Net MVC Web API', description: 'After completing this course the student will know how to develop a web-based application using WCF in Asp.Net, strong foundation for applying design patterns. Developing more dynamic and exciting web application using WCF. Establish better preparation for window application with WPF.', duration: '3 weeks', fees: '$300' },
    { id: 5, name: 'SQL Fundamentals', description: 'After this course the student will understand all the basic SQL commands and would be very capable of working with any DBMS which uses SQL statements.', duration: '2 weeks', fees: '$200' },
    { id: 6, name: 'Web Development', description: 'After completion of this course you will have a strong foundation of basic Web Designing and Development. You will be able to develop dynamic and interactive web applications. Also Apply animations & effects to web pages.', duration: '2 weeks', fees: '$180' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find(c => c.id === id);
  }
}
