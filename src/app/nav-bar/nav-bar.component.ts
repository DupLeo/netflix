import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgOptimizedImage,
    RouterLink,
    FontAwesomeModule,
    FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  searchTerm = '';

  router = inject(Router);

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    if(this.searchTerm.length >= 1) {
      this.router.navigate(['search'], {queryParams: {q: this.searchTerm}});
    } else if (this.searchTerm.length === 0) {
      this.router.navigate(['']);
    }
  }
}
