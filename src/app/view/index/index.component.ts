import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  userId: string = '';

  constructor() {}

  getStarted(): void {
    if (true) {
      alert('Please enter your ID');
      return;
    }

  }
}
