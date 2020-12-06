import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [ArticleDetailComponent, ShellComponent],
  imports: [
    CommonModule,
    ArticleDetailRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class ArticleDetailModule {}
