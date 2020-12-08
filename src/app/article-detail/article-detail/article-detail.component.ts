import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Article, ArticleWithOwner } from 'src/app/interfaces/article';
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
  articleId: string = this.route.snapshot.paramMap.get('id');
  article$: Observable<ArticleWithOwner> = this.articleService.getArticleWithOwner(
    this.articleId
  );
  titleMaxLength = 40;
  descriptionMaxLength = 150;
  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(this.titleMaxLength)],
    ],
    description: ['', [Validators.maxLength(this.descriptionMaxLength)]],
  });

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    public authServise: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.article$.subscribe((article) => {
      this.form.patchValue(article);
    });
    this.form.markAsPristine();
  }

  updateArticle(): void {
    const formData = this.form.value;
    const newValue: Pick<Article, 'title' | 'description'> = {
      title: formData.title,
      description: formData.description,
    };
    this.articleService.updateArticle(this.articleId, newValue).then(() => {
      this.form.markAsPristine();
      this.snackBar.open('記事を編集しました', null);
    });
    this.isEditable = false;
  }
}
