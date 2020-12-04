import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageRoutingModule } from './top-page-routing.module';
import { TopPageComponent } from './top-page/top-page.component';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    TopPageRoutingModule
  ]
})
export class TopPageModule { }
