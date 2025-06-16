import { Routes } from '@angular/router';
import AuthSignUpComponent from './auth/features/auth-sign-up/auth-sign-up.component';
import AuthLogInComponent from './auth/features/auth-log-in/auth-log-in.component';

export const routes: Routes = [
  { path: 'sign-up', component: AuthSignUpComponent },
  { path: 'log-in', component: AuthLogInComponent },
  { path: '**', component: AuthLogInComponent },
];
