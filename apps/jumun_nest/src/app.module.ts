import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { MenuModule } from './menu/menu.module';
import { MulterModule } from '@nestjs/platform-express';
import { ChatroomModule } from './chatroom/chatroom.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UsersModule,
    AuthModule,
    StoreModule,
    MenuModule,
    MulterModule.register({
      limits: {
        fileSize: 1024 * 1024 * 500,
      },
    }),
    ChatroomModule,
  ],
})
export class AppModule {}
