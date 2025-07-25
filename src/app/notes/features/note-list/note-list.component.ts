import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../auth/data-access/auth-service.service';
import { NotesService } from '../../data-access/notes.service';
import { NoteForm } from '../../../shared/interfaces/note-form';
import { Note } from '../../../shared/interfaces/note';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
@Component({
  selector: 'app-note-list',
  imports: [ReactiveFormsModule, NavBarComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent implements AfterViewInit {
  private _authService = inject(AuthServiceService);

  private _router = inject(Router);

  private _formBuilder = inject(FormBuilder);

  _notesService = inject(NotesService);

  noteSelected: Note | null = null;

  form = this._formBuilder.group<NoteForm>({
    title: this._formBuilder.control(null, Validators.required),
    description: this._formBuilder.control(null),
    destination: this._formBuilder.control(null, Validators.required),
    rating: this._formBuilder.control(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    start_date: this._formBuilder.control(null, Validators.required),
    end_date: this._formBuilder.control(null, Validators.required),
  });

  // async logOut() {
  //   await this._authService.signOut();
  //   this._router.navigateByUrl('/log-in');
  // }

  ngAfterViewInit(): void {
    this._notesService.getAllNotes();
  }

  newNote() {
    if (this.form.invalid) return;

    const noteData = {
      title: this.form.value.title ?? '',
      description: this.form.value.description ?? '',
      destination: this.form.value.destination ?? '',
      rating: this.form.value.rating ?? 1,
      start_date: this.form.value.start_date ?? '',
      end_date: this.form.value.end_date ?? '',
    };

    if (this.noteSelected) {
      //editar
      this._notesService.updateNote({
        ...noteData,
        id: this.noteSelected.id,
      });
    } else {
      this._notesService.insertNote(noteData);
    }
    this.form.reset();
    this.noteSelected = null;
  }

  editNote(note: Note) {
    this.noteSelected = note;
    console.log(this.noteSelected);

    this.form.setValue({
      title: note.title,
      description: note.description,
      destination: note.destination,
      rating: note.rating,
      start_date: note.start_date,
      end_date: note.end_date,
    });
  }

  deleteNote(note: Note) {
    this._notesService.deleteNote(note.id);
  }
}
