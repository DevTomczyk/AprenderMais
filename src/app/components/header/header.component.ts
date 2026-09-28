import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrl: './header.component.css' })
export class HeaderComponent {
  @Input({ required: true }) userLoggedIn = false;
  @Input() cartCount = 0;
  @Output() navigate = new EventEmitter<'catalog' | 'courses' | 'admin' | 'cart'>();
  @Output() loginChanged = new EventEmitter<void>();
}
