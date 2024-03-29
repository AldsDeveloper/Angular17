import { Component, OnInit ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AfterViewInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular'
import { ChangeDetectorRef } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { ViewChild } from '@angular/core';

// Components
import { IndexComponent } from '../index/index.component';
import { FooterComponent } from '../../components/footer/footer.component';


import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [FooterComponent,CommonModule,RouterLink, RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})

export class ExamsComponent implements OnInit {

  unansweredIndex: number = -1;
  questions: { question: string; answer: string }[] = [{ question: '', answer: '' }];
  userId: any;
  currentQuestionIndex: number = 0;
  isSubmitted: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getQuestions();
    console.log(this.userId);
  }

  getQuestions(): void {
    this.http.post('http://localhost:3000/fetch/questions', {}).subscribe((data: any) => {
      this.questions = data.map((q: any) => ({ question: q.content, answer: '' }));
      console.log(this.questions);
    });
  }

  goToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.unansweredIndex = -1;
    }
  }

  goToPreviousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.unansweredIndex = -1;
    }
  }

  submitForm(): void {
    this.unansweredIndex = this.questions.findIndex(question => !question.answer.trim());
    if (this.unansweredIndex !== -1) {
      alert(`You have not answered question ${this.unansweredIndex + 1}`);
      this.currentQuestionIndex = this.unansweredIndex;
    } else {
      const payload = {
        userId: this.userId,
        answers: this.questions.map(q => q.answer)
      };

      this.http.post('http://localhost:3000/submit/answers', payload).subscribe(response => {
        console.log('Server response:', response);
        alert('Form submitted!');
      }, error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form!');
      });
    }
  }


}
