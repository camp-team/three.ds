export interface Article {
  id: string;
  ownerId: string;
  title: string;
  image: any;
  createdAt: Date;
  updatedAt: Date;
  likeCount?: number;
}
