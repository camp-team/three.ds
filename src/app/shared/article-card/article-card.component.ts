import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Article';
import { UserData } from 'src/app/interfaces/user-data';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() user: UserData;
  @Input() article: Article;

  author$: Observable<UserData>;
  user$: Observable<UserData> = this.authService.user$;
  uid: string;

  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.author$ = this.userService.getUser(this.article.ownerId).pipe(take(1));
    this.user$.pipe(take(1)).toPromise().then((user) => {
      this.uid = user.uid;
    });
  }

  deleteArticle(): void {
    this.articleService.deleteArticle(this.article.id).then(() => {
      this.snackBar.open('削除しました！');
    });
  }
}
