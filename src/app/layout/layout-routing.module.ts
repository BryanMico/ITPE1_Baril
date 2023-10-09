import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: "manage/dashboard", pathMatch: "prefix",
      },
      {
        path: 'manage/dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: 'manage/students',
        loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule),
      },
      {
        path: 'manage/teachers',
        loadChildren: () => import('./teacher/teacher.module').then(mod => mod.TeacherModule),
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
