export interface UserData {
  uid: string;
  name: string;
  email: string;
  avatarURL: string;
  createdAt: Date;
  likedPostIds?: string[];
}
