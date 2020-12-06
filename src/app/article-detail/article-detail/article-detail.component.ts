import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/Article';
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
  article$: Observable<Article> = this.articleService.getArticle(
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

  // user$: Observable<UserData> = this.userService.getUser();

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    public authServise: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.article$.subscribe((article) => {
      this.form.patchValue(article);
    });
    this.form.markAsPristine();
  }

  update(): void {
    const formData = this.form.value;
    const newValue: Omit<
      Article,
      'id' | 'createdAt' | 'ownerId' | 'image' | 'updatedAt' | 'likeCount'
    > = {
      title: formData.title,
      description: formData.description,
    };
    this.articleService.updateArticle(this.articleId, newValue);
  }
}
