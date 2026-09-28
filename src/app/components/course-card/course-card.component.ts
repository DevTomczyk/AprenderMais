import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Course } from '../../course';

@Component({ selector: 'app-course-card', imports: [CurrencyPipe], templateUrl: './course-card.component.html', styleUrl: './course-card.component.css' })
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Output() selected = new EventEmitter<Course>();
  @Output() favoriteChanged = new EventEmitter<Course>();
  @Output() addToCart = new EventEmitter<Course>();
}
