import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/store/store.entity';
import { Menu } from './menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { StoreModule } from 'src/store/store.module';
import { StoreService } from 'src/store/store.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Store])],
  controllers: [MenuController],
  providers: [MenuService, StoreService],
})
export class MenuModule {}
