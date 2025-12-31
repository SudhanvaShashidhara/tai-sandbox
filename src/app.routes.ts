import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { FormGeneralPageComponent } from './components/form-page-general.component';
import { FormSalesPageComponent } from './components/form-page-sales.component';
import { FormSupportPageComponent } from './components/form-page-support.component';
import { FormFeedbackPageComponent } from './components/form-page-feedback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'general-form', 
    component: FormGeneralPageComponent, 
    data: { title: 'General Inquiry', id: 'general-form' } 
  },
  { 
    path: 'sales-form', 
    component: FormSalesPageComponent, 
    data: { title: 'Sales Contact', id: 'sales-form' } 
  },
  { 
    path: 'support-form', 
    component: FormSupportPageComponent, 
    data: { title: 'Support Request', id: 'support-form' } 
  },
  { 
    path: 'feedback-form', 
    component: FormFeedbackPageComponent, 
    data: { title: 'Feedback & Suggestions', id: 'feedback-form' } 
  },
  { path: '**', redirectTo: '' }
];