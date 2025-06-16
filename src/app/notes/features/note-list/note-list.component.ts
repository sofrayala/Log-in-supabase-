import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../auth/data-access/auth-service.service';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent {
  private _authService = inject(AuthServiceService);

  async logOut() {
    await this._authService.signOut();
  }
}
