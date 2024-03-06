import { Component, OnInit ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular'
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-define',
  standalone: true,
  imports: [FormsModule, EditorModule,CommonModule],
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.css']

})

export class DefineComponent implements OnInit {
  questions: { question: string }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.questions.push({ question: '' });
  }


  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }


  addQuestion(): void {
    this.questions.push({ question: '' });
    this.cdr.detectChanges();
  }


  submitForm(): void {
    alert('Form submitted');
  }

  editorConfig = {
    height: 300,
    menubar: false,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'anchor',
      'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'paste', 'code', 'help', 'wordcount'
    ],

    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    '| image | removeformat| print | help ',

    file_picker_callback: function(
      callback: (fileUrl: string, metadata: { alt: string }) => void,
      value: string,
      meta: Record<string, any>
    ) {
      if (meta['filetype'] === 'image') {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = function() {
          if (input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function() {
              callback(reader.result as string, { alt: file.name });
            };
            reader.readAsDataURL(file);
          }
        };
        input.click();
      }
    }
  };
}

