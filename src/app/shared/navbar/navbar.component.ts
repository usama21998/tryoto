import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [RouterLink]
})

export class NavBarComponent {
  mobileMenuOpen: boolean = false;

  constructor(private router: Router) {
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  route(path: string) {
    this.router.navigate([path]);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

