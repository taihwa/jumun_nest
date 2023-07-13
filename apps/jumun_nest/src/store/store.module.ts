import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { Store } from './store.entity';
import { MenuModule } from 'src/menu/menu.module';
import { Menu } from 'src/menu/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store, Menu]), MenuModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
