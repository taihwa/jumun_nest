import { UserType } from 'src/users/enum/user.enum';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  userId: string;
  @Column()
  userName: string;
  @Column()
  password: string;
  @Column()
  userType: UserType;
  @Column()
  crtDate: Date;
  @Column()
  udtDate: Date;
}
