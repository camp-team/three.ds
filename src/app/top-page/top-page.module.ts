import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageRoutingModule } from './top-page-routing.module';
import { TopPageComponent } from './top-page/top-page.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [TopPageComponent, ShellComponent],
  imports: [
    CommonModule,
    TopPageRoutingModule
  ]
})
export class TopPageModule { }
