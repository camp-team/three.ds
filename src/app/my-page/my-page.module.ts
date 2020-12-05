import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page/my-page.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MyPageComponent, ShellComponent],
  imports: [
    CommonModule,
    MyPageRoutingModule,
    SharedModule
  ]
})
export class MyPageModule { }
