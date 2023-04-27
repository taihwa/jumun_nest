import { UserType } from '../enum/user.enum';

export class CreateUserDto {
  userId: string;
  userName: string;
  password: string;
  userType: UserType;
}
