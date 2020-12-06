import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Article';
import { UserData } from 'src/app/interfaces/user-data';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() user: UserData;
  @Input() article: Article;

  author$: Observable<UserData>;

  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.author$ = this.userService.getUser(this.article.ownerId).pipe(take(1));
  }

  deleteArticle(id: string): void {
    // 下記でarticleServiceのdelete関数呼び出す
    console.log(id);
    this.articleService.deleteArticle(this.article.id).then(() => {
      this.snackBar.open('削除しました！', null);
    });
  }
}
