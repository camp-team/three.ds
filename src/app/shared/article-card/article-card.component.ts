import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Article';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() user: UserData;
  @Input() article: Article;

  // cardのaタグのリンクをこれに差し替えて使う
  // [routerLink]="['/article-detail/', article.id]"

  constructor() { }

  ngOnInit(): void { }

  deleteArticle(id: string): void {
    // 下記でarticleServiceのdelete関数呼び出す
    console.log(id);
  }
}
