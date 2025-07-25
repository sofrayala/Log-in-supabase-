import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthServiceService } from '../../auth/data-access/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  private authService = inject(AuthServiceService);

  private router = inject(Router);

  async logOut() {
    await this.authService.signOut();
    this.router.navigateByUrl('/log-in');
    alert('You are logged out');
  }
}
