import firebase from 'firebase'
export interface Article {
  id: string;
  ownerId: string;
  title: string;
  image?: any;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
  likeCount?: number;
}
