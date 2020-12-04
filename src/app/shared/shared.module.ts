import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageObjectComponent } from './image-object/image-object.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CreateArticleDialogComponent } from './create-article-dialog/create-article-dialog.component';


@NgModule({
  declarations: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent,
    CreateArticleDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent,
    CreateArticleDialogComponent
  ]
})
export class SharedModule { }
