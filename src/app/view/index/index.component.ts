import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {

  constructor(private router: Router, private http: HttpClient) {}

  userId: string = '';

  getStarted(): void {
    if (!this.userId) {
      alert('Please enter your ID');
      return;
    } else {
      console.log(this.userId);
      this.router.navigate(['/exams', this.userId]);
    }
  }
}
