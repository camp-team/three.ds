import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  private uid: string = this.route.snapshot.paramMap.get('id');
  articles$ = this.articleService.getArticleByOwnerId(this.uid);
  imageFile: string;
  nameForm = new FormControl('', [Validators.maxLength(30)]);

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private userService: UserService,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log(this.uid);

  }

  onCroppedImage(image: string): void {
    this.imageFile = image;
  }

  chengeUserAvatar(): Promise<void> {
    return this.userService
      .changeUserAvatar(this.authService.uid, this.imageFile)
      .then(() => {
        this.snackBar.open('変更されました', null);
        this.imageFile = null;
      })
      .catch(() => {
        this.snackBar.open('変更に失敗しました', null);
      });
  }

  chengeUserName(): Promise<void> {
    const newUserName = this.nameForm.value;
    return this.userService
      .changeUserName(this.authService.uid, newUserName)
      .then(() => {
        this.snackBar.open('変更されました', null);
        this.nameForm.reset();
      })
      .catch(() => {
        this.snackBar.open('変更に失敗しました', null);
      });
  }
}
