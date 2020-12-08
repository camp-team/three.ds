import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  articles$: Observable<Article[]> = this.articleService.getArticles();

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

}
