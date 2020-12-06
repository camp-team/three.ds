import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/Article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  isEditable: boolean;
  articleId: string = this.route.snapshot.paramMap.get('id');
  article$: Observable<Article> = this.articleService.getArticle(
    this.articleId
  );

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    public authServise: AuthService
  ) {}

  ngOnInit(): void {}
}
