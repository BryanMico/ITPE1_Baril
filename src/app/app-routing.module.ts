import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule),
  },
  {
    path: 'manage/dashboard',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: 'manage/students',
    loadChildren: () => import('./layout/student/student.module').then(mod => mod.StudentModule),
  },
  {
    path: 'manage/teachers',
    loadChildren: () => import('./layout/teacher/teacher.module').then(mod => mod.TeacherModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
