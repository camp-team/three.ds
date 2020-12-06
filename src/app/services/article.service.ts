import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Article, ArticleWithOwner } from '../interfaces/Article';
import { UserService } from './user.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage,
    private userService: UserService,
  ) { }

  async createArticle(article: Omit<Article, 'id'>): Promise<string> {
    const id = this.db.createId();
    if (article.image !== undefined) {
      article.image = await this.setImageToStorage(id, article.image);
    }
    const newValue: Article = {
      id,
      ...article,
    };
    await this.db.doc<Article>(`posts/${id}`).set(newValue);
    return id;
  }

  updateArticle(
    id: string,
    article: Omit<
      Article,
      'id' | 'createdAt' | 'ownerId' | 'image' | 'updatedAt' | 'likeCount'
    >
  ): Promise<void> {
    const newValue: Omit<
      Article,
      'id' | 'createdAt' | 'ownerId' | 'image' | 'likeCount'
    > = {
      ...article,
      updatedAt: firebase.default.firestore.Timestamp.now(),
    };
    return this.db.doc<Article>(`posts/${id}`).update(newValue);
  }

  getArticle(articleId: string): Observable<Article> {
    return this.db.doc<Article>(`posts/${articleId}`).valueChanges();
  }

  getArticleByOwnerId(ownerId: string): Observable<Article[]> {
    return this.db
      .collection<Article>('posts', (ref) =>
        ref.where('ownerId', '==', ownerId)
      )
      .valueChanges();
  }

  async setImageToStorage(articleId: string, file: File): Promise<string> {
    const result = await this.storage.ref(`posts/${articleId}`).put(file);
    return result.ref.getDownloadURL();
  }

  getArticles(): Observable<Article[]> {
    return this.db.collection<Article>('posts', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }

  deleteArticle(id: string): Promise<void> {
    return this.db.doc<Article>(`posts/${id}`).delete();
  }

  getArticleWithOwner(id: string): Observable<ArticleWithOwner> {
    return this.db.doc<Article>(`posts/${id}`).valueChanges().pipe(
      switchMap((article: Article) => {
        if (article) {
          const user$ = this.userService.getUser(article.ownerId);
          return combineLatest([of(article), user$]);
        } else {
          return of([]);
        }
      }),
      map(([article, user]) => {
        return article
          ? {
            ...article,
            user,
          }
          : null;
      })
    );
  }
}
