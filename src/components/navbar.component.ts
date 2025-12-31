import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="flex items-center gap-2 group">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-indigo-700 transition-colors">
                T
              </div>
              <span class="font-bold text-xl tracking-tight text-gray-900">TAI | <span class="text-indigo-600">Sandbox</span></span>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex md:items-center md:space-x-1">
            <a routerLink="/" 
               routerLinkActive="text-indigo-600 bg-indigo-50" 
               [routerLinkActiveOptions]="{exact: true}"
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all">
               Home
            </a>
            <a routerLink="/general-form" 
               routerLinkActive="text-indigo-600 bg-indigo-50"
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all">
               General
            </a>
            <a routerLink="/sales-form" 
               routerLinkActive="text-indigo-600 bg-indigo-50"
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all">
               Sales
            </a>
            <a routerLink="/support-form" 
               routerLinkActive="text-indigo-600 bg-indigo-50"
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all">
               Support
            </a>
            <a routerLink="/feedback-form" 
               routerLinkActive="text-indigo-600 bg-indigo-50"
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all">
               Feedback
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center md:hidden">
            <button (click)="toggleMenu()" class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors">
              <span class="sr-only">Open main menu</span>
              @if (!isMenuOpen()) {
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              } @else {
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a (click)="closeMenu()" routerLink="/" routerLinkActive="text-indigo-600 bg-indigo-50" [routerLinkActiveOptions]="{exact: true}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Home</a>
            <a (click)="closeMenu()" routerLink="/general-form" routerLinkActive="text-indigo-600 bg-indigo-50" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">General Inquiry</a>
            <a (click)="closeMenu()" routerLink="/sales-form" routerLinkActive="text-indigo-600 bg-indigo-50" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Sales</a>
            <a (click)="closeMenu()" routerLink="/support-form" routerLinkActive="text-indigo-600 bg-indigo-50" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Support</a>
            <a (click)="closeMenu()" routerLink="/feedback-form" routerLinkActive="text-indigo-600 bg-indigo-50" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Feedback</a>
          </div>
        </div>
      }
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}