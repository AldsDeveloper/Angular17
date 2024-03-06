import { Component, OnInit ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular'



@Component({
  selector: 'app-define',
  standalone: true,
  imports: [FormsModule, EditorModule],
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.css']

})
export class DefineComponent {

  editorConfig = {
    height: 300,
    menubar: true,  
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
      'formatpainter permanentpen pagebreak nonbreaking',
      'charmap emoticons template',
    ],
    toolbar: 'undo redo | formatselect | fontselect fontsizeselect formatpainter | ' +
             'bold italic underline strikethrough | forecolor backcolor | ' +
             'alignleft aligncenter alignright alignjustify | ' +
             'bullist numlist outdent indent | ' +
             'removeformat | insertfile image media link anchor codesample | ' +
             'fullscreen preview print | help',
  };

}
