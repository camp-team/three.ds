import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  async createArticle(
    article: Omit<Article, 'id'>
  ): Promise<string> {
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

  async setImageToStorage(articleId: string, file: File): Promise<string> {
    const result = await this.storage
      .ref(`posts/${articleId}`)
      .put(file);
    return result.ref.getDownloadURL();
  }
}
