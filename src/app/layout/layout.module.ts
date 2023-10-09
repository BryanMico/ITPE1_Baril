import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from '../components/screen/screen.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

  ]
})
export class LayoutModule { }
