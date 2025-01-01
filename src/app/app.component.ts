import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing-demo';
}
