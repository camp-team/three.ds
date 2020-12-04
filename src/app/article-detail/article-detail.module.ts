import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [ArticleDetailComponent, ShellComponent],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule
  ]
})
export class ArticleDetailModule { }
