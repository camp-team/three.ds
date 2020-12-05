import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private db: AngularFirestore, private router: Router) {}

  async createArticle(article: Omit<Article, 'id'>): Promise<void> {
    const id = this.db.createId();
    const newValue: Article = {
      id,
      ...article,
    };
    await this.db
      .doc<Article>(`posts/${id}`)
      .set(newValue)
      .then(() => {
        this.router.navigateByUrl(`article/${id}`);
      });
  }

  getArticle(articleId: string): Observable<Article> {
    return this.db.doc<Article>(`posts/${articleId}`).valueChanges();
  }
}
