import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('api/users')
export class UsersController {
  usersService: UsersService;
  constructor(private usersSevice: UsersService) {
    this.usersService = usersSevice;
  }

  @Public()
  @Post('/register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    await this.usersService.createUser(createUserDto);
    return 'ok';
  }

  @Get()
  async findAllUser() {
    return await this.usersService.findAll();
  }
}
