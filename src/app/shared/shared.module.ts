import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageObjectComponent } from './image-object/image-object.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CreateArticleDialogComponent } from './create-article-dialog/create-article-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent,
    CreateArticleDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent,
    CreateArticleDialogComponent,
  ],
})
export class SharedModule {}
