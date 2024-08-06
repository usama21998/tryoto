import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { } from 'rxjs';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})

export class FooterComponent {
  constructor(private router: Router) {
  }

  route(path: string) {
    this.router.navigate([path]);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

