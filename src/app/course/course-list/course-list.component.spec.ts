import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CourseListComponent } from './course-list.component';
import { CourseService } from '../../services/course.service';
import { of } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [ provideHttpClient(), provideHttpClientTesting(),CourseService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courseService = TestBed.inject(CourseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar un nuevo curso y actualizar la lista', () => {
    component.newCourseName = 'Java Fundamentals';
    component.addCourse();
    expect(component.courses.length).toBeGreaterThan(0);
    expect(component.courses.some(c => c.name === 'Java Fundamentals')).toBeTruthy();
  });

  it('debería listar cursos en la carga inicial del componente', () => {
    spyOn(courseService, 'getCourses').and.returnValue(of([
      { id: 1, name: 'Test Course' }
    ]));
    component.ngOnInit();
    expect(component.courses.length).toBe(1);
    expect(component.courses[0].name).toBe('Test Course');
  });
});
