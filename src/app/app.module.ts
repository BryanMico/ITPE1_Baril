import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { TeacherModule } from './layout/teacher/teacher.module';
import { StudentModule } from './layout/student/student.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    LayoutModule,
    DashboardModule,
    TeacherModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
