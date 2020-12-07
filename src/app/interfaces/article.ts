import { Timestamp } from '@google-cloud/firestore';
import { UserData } from './user-data';
export interface Article {
  id: string;
  ownerId: string;
  title: string;
  description?: string;
  image: string | any;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likeCount?: number;
}

export interface ArticleWithOwner extends Article {
  user: UserData;
}
