import { Component, ChangeDetectionStrategy, input, signal, inject, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-sales-page',
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-[calc(100vh-64px-300px)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center">
      <div class="w-full max-w-lg">
        
        <!-- Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ pageTitle }}</h2>
          <p class="mt-2 text-sm text-gray-600">Please fill out the form below and we will get back to you shortly.</p>
        </div>

        <div class="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100 sm:px-10 relative overflow-hidden">
          
          <!-- Success Overlay -->
          @if (isSuccess()) {
            <div class="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-6 text-center animate-fade-in">
              <div class="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Submission Successful!</h3>
              <p class="text-gray-500 mb-6">Thank you for contacting us. We have received your {{ pageTitle.toLowerCase() }} information.</p>
              <button (click)="resetForm()" class="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                Send another message
              </button>
            </div>
          }

          <!-- Form -->
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
            
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <div class="mt-1">
                <input type="text" id="name" formControlName="name"
                  class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  [class.border-red-300]="isFieldInvalid('name')"
                  [class.focus:ring-red-500]="isFieldInvalid('name')"
                  [class.focus:border-red-500]="isFieldInvalid('name')"
                  placeholder="John Doe">
              </div>
              @if (isFieldInvalid('name')) {
                <p class="mt-1 text-sm text-red-600">Name is required.</p>
              }
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <div class="mt-1">
                <input type="email" id="email" formControlName="email"
                  class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  [class.border-red-300]="isFieldInvalid('email')"
                  placeholder="you@example.com">
              </div>
              @if (isFieldInvalid('email')) {
                <p class="mt-1 text-sm text-red-600">Please enter a valid email.</p>
              }
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <div class="mt-1">
                <input type="tel" id="phone" formControlName="phone"
                  class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  placeholder="+1 (555) 987-6543">
              </div>
            </div>

            <!-- Additional Details -->
            <div>
              <label for="details" class="block text-sm font-medium text-gray-700">Additional Details</label>
              <div class="mt-1">
                <textarea id="details" formControlName="details" rows="4"
                  class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  placeholder="How can we help you?"></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button type="submit" [disabled]="form.invalid || isSubmitting()"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all relative">
                
                @if (isSubmitting()) {
                  <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span class="opacity-0">Submit Request</span>
                } @else {
                  <span>Submit Request</span>
                }
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSalesPageComponent {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  
  // Title will be populated from route data via component inputs or manual route data access
  pageTitle = 'Form';
  
  isSubmitting = signal(false);
  isSuccess = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    details: ['']
  });

  constructor() {
    // Listen to route data changes to update title
    this.route.data.subscribe(data => {
      this.pageTitle = data['title'] || 'Form';
      this.resetFormState();
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitting.set(true);
      
      // Simulate Async API call
      setTimeout(() => {
        console.log('Form Submitted', this.form.value);
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
      }, 1500);
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.resetFormState();
    this.form.reset();
  }

  private resetFormState() {
    this.isSuccess.set(false);
    this.isSubmitting.set(false);
  }
}