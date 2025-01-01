import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';// Importa CommonModule para usar *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  newCourseName: string = '';
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  addCourse(): void {
    if (this.newCourseName.trim()) {
      const newCourse = { id: Date.now(), name: this.newCourseName };
      this.courseService.addCourse(newCourse);
      this.newCourseName = '';
      this.courses.push(newCourse);
    }
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnInit(): void {
    this.loadCourses();
  }
}
