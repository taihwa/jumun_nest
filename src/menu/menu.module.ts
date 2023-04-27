import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/store/store.entity';
import { Menu } from './menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Store])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
