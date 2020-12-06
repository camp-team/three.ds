import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Article } from 'src/app/interfaces/Article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-article-dialog',
  templateUrl: './create-article-dialog.component.html',
  styleUrls: ['./create-article-dialog.component.scss']
})
export class CreateArticleDialogComponent implements OnInit {

  image: File;
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(40)]],
  });

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getImage(event: any): void {
    this.image = event.target.files[0];
  }

  cancel(): void {
    this.image = null;
  }

  async submit(): Promise<void> {
    const formData = this.form.value;
    const articleValue: Omit<Article, 'id'> = {
      ownerId: this.authService.uid,
      title: formData.title,
      image: this.image,
      createdAt: firebase.default.firestore.Timestamp.now(),
      updatedAt: firebase.default.firestore.Timestamp.now(),
    };
    this.articleService.createArticle(articleValue).then((id) => {
      this.snackBar.open('作成されました！', null);
      this.router.navigateByUrl(`article-dateli/${id}`);
    });
  }
}
