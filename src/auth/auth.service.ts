import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userId: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    console.log(user);
    if (user === null)
      throw new BadRequestException('유저를 찾을 수 없습니다', {
        cause: new Error(),
        description: '사용자를 찾을 수 업습니다',
      });
    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      throw new UnauthorizedException();
    }
    // TODO: Generate a Jwt and return it here
    const payload = { userName: user.userName, sub: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
