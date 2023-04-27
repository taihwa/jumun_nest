import { Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const { userId, userName, userType, password } = createUserDto;

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    const user = new Users();
    user.userId = userId;
    user.userName = userName;
    user.userType = userType;
    user.password = hash;
    user.crtDate = new Date();
    user.udtDate = new Date();

    const result = await this.usersRepository.save(user);
    return result;
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne(userId: string): Promise<Users> {
    const options: FindOneOptions<Users> = {
      where: {
        userId: userId,
      },
    };
    return await this.usersRepository.findOne(options);
  }
}
