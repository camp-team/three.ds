export interface Article {
  id: string;
  ownerId: string;
  title: string;
  description?: string;
  image: string | any;
  createdAt: firebase.default.firestore.Timestamp;
  updatedAt: firebase.default.firestore.Timestamp;
  likeCount?: number;
}
