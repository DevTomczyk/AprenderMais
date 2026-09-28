import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../course';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({ selector: 'app-course-catalog', imports: [CourseCardComponent], templateUrl: './course-catalog.component.html', styleUrl: './course-catalog.component.css' })
export class CourseCatalogComponent {
  @Input({ required: true }) courses: Course[] = [];
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() favoriteChanged = new EventEmitter<Course>();
  @Output() addToCart = new EventEmitter<Course>();
}
