import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../course';

@Component({ selector: 'app-course-details', templateUrl: './course-details.component.html', styleUrl: './course-details.component.css' })
export class CourseDetailsComponent {
  @Input({ required: true }) course!: Course;
  @Output() closed = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<Course>();
}
