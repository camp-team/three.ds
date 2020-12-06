import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private storage: AngularFireStorage
  ) { }

  async createArticle(
    article: Omit<Article, 'id'>
  ): Promise<void> {
    const id = this.db.createId();
    if (article.image !== undefined) {
      article.image = await this.setImageToStorage(id, article.image);
    }
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

  getArticleByOwnerId(ownerId: string): Observable<Article[]> {
    return this.db
      .collection<Article>('posts', (ref) => ref.where('ownerId', '==', ownerId))
      .valueChanges();
  }

  async setImageToStorage(articleId: string, file: File): Promise<string> {
    const result = await this.storage
      .ref(`posts/${articleId}`)
      .put(file);
    return result.ref.getDownloadURL();
  }

  getArticles(): Observable<Article[]> {
    return this.db.collection<Article>('posts').valueChanges();
  }

  deleteArticle(id: string): Promise<void> {
    return this.db.doc<Article>(`posts/${id}`).delete();
  }
}
