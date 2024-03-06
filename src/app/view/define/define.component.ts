import { Component, OnInit ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, ActivatedRoute,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-define',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './define.component.html',
})
export class DefineComponent {
  
}

