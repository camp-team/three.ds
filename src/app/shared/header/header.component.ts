import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CreateArticleDialogComponent } from '../create-article-dialog/create-article-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  logout(): void {
    this.authService.logout();
  }
  login(): void {
    this.authService.googleLogin();
  }

  createArticleDialog(): void {
    this.dialog.open(CreateArticleDialogComponent, { width: '1200px' });
  }
}
