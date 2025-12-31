import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  template: `
    <footer class="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Brand -->
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
              <span class="font-bold text-xl text-white">TAI | Sandbox</span>
            </div>
            <p class="text-sm text-gray-400">
              Building the future of digital forms with modern web technologies. Simple, fast, and accessible.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Solutions</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <!-- Links -->
          <div>
            <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Legal</a></li>
              <li><a href="#" class="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <!-- Subscription -->
          <div class="col-span-1 md:col-span-1">
            <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Subscribe to updates</h3>
            
            @if (success()) {
              <div class="p-3 bg-green-900/30 border border-green-800 rounded-md text-green-400 text-sm">
                Thanks for subscribing!
              </div>
            } @else {
              <form [formGroup]="subForm" (ngSubmit)="onSubscribe()" class="space-y-2">
                <div>
                  <label for="sub-email" class="sr-only">Email address</label>
                  <input type="email" id="sub-email" formControlName="email"
                    class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Enter your email">
                </div>
                <button type="submit" [disabled]="subForm.invalid || loading()"
                  class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors disabled:opacity-50">
                  @if(loading()) { Subscribing... } @else { Subscribe }
                </button>
              </form>
            }

            <div class="flex space-x-6 mt-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">&copy; 2024 TAI Sandbox Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  subForm;
  loading = signal(false);
  success = signal(false);

  constructor(private fb: FormBuilder) {
    this.subForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubscribe() {
    if (this.subForm.valid) {
      this.loading.set(true);
      setTimeout(() => {
        this.loading.set(false);
        this.success.set(true);
        this.subForm.reset();
      }, 1000);
    }
  }
}