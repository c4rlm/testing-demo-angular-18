import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(), provideHttpClientTesting(), CourseService ],
      imports: [],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería listar todos los cursos', () => {
    const mockCourses = [
      { id: 1, name: 'Angular Fundamentals' },
      { id: 2, name: 'JavaScript Essentials' },
    ];

    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('courses.json'); //intercepta endpoint
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses); //respuesta simulada
  });

  afterEach(() => {
    httpMock.verify();
  });

});
