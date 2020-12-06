import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ArticleDetailComponent, ShellComponent],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ArticleDetailModule { }
