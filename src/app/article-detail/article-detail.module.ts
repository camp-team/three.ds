import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ArticleDetailComponent, ShellComponent],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule,
    SharedModule
  ]
})
export class ArticleDetailModule { }
