import { Routes } from '@angular/router';

import { IndexComponent } from './view/index/index.component';
import { ExamsComponent } from './view/exams/exams.component';
import { DefineComponent } from './view/define/define.component';
import { ErrorComponent } from './view/error/error.component';

export const routes: Routes = [

  { path: "exams/:userId", title:"exams", component: ExamsComponent },
  { path: "define", title:"define exams", component: DefineComponent },
  { path: "", component: IndexComponent },
  { path: '**', component: ErrorComponent }

];
