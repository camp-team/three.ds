import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageRoutingModule } from './top-page-routing.module';
import { TopPageComponent } from './top-page/top-page.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TopPageComponent, ShellComponent],
  imports: [
    CommonModule,
    TopPageRoutingModule,
    SharedModule
  ]
})
export class TopPageModule { }
