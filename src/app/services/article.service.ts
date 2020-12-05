import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../interfaces/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private db: AngularFirestore
  ) { }

  async createArticle(
    article: Omit<Article, 'id'>
  ): Promise<void> {
    const id = this.db.createId();
    const newValue: Article = {
      id,
      ...article,
    };
    await this.db.doc<Article>(`posts/${id}`).set(newValue);
  }
}
