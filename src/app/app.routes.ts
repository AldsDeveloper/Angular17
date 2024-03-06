import { Routes } from '@angular/router';

import { IndexComponent } from './view/index/index.component';
import { ExamsComponent } from './view/exams/exams.component';
import { DefineComponent } from './view/define/define.component';

export const routes: Routes = [
  { path: "define", component: DefineComponent },
  { path: "exams/:userId", component: ExamsComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

];
