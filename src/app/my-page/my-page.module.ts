import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page/my-page.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CropperModule } from '@deer-inc/ngx-croppie';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MyPageComponent, ShellComponent],
  imports: [
    CommonModule,
    MyPageRoutingModule,
    SharedModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    CropperModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MyPageModule { }
