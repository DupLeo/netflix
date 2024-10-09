import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faIconLibrary = inject(FaIconLibrary)
  
  ngOnInit(): void {
    this.initFontAwesome()
  }
  
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons)
  }
  title = 'Netflix';
}
