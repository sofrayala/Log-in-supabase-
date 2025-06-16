import { Routes } from '@angular/router';
import AuthSignUpComponent from './auth/features/auth-sign-up/auth-sign-up.component';
import AuthLogInComponent from './auth/features/auth-log-in/auth-log-in.component';
import { NoteListComponent } from './notes/features/note-list/note-list.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'sign-up', component: AuthSignUpComponent },
  { path: 'log-in', component: AuthLogInComponent },
  {
    path: 'note-list',
    canActivate: [authGuard],
    component: NoteListComponent,
  },
  { path: '', component: NoteListComponent },
];
