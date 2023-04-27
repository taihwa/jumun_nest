import { UserType } from './enum/user.enum';

export interface User {
  userId: string;
  userName: string;
  password: string;
  userType: UserType;
  crtDate: Date;
  udtDate: Date;
}
