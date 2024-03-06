import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [FooterComponent,CommonModule, RouterLink, RouterLinkActive,FormsModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {
  //
}
