import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Article, ArticleWithOwner } from 'src/app/interfaces/Article';
import { UserData } from 'src/app/interfaces/user-data';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  isEditable: boolean;
  ownerId: string;
  articleId: string = this.route.snapshot.paramMap.get('id');
  article$: Observable<ArticleWithOwner> = this.articleService.getArticleWithOwner(
    this.articleId
  );
  ownerUser$: Observable<UserData>;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    public authServise: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.article$.subscribe((article) => {
      console.log(article);
    })
  }
}
