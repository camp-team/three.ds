import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageObjectComponent } from './image-object/image-object.component';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    ImageObjectComponent
  ]
})
export class SharedModule { }
