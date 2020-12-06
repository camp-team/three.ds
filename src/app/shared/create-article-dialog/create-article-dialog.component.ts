import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-article-dialog',
  templateUrl: './create-article-dialog.component.html',
  styleUrls: ['./create-article-dialog.component.scss']
})
export class CreateArticleDialogComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    const formData = this.form.value;
    const articleValue = {
      ownerId: this.authService.uid,
      title: formData.title,
      createdAt: firebase.default.firestore.Timestamp.now(),
      updatedAt: firebase.default.firestore.Timestamp.now(),
    };
    this.articleService.createArticle(articleValue).then(() => {
      this.snackBar.open('作成されました！', null);
    });
  }

}
