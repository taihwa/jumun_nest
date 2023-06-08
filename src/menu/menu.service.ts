import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateMenuDto } from './dto/createMenu.dto';
import { UpdateMenuDto } from './dto/updateMenu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { MenuDto } from './dto/menu.dto';
import { Store } from 'src/store/store.entity';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class MenuService {
  constructor(
    private storeService: StoreService,
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto[]) {
    const store = await this.storeService.findStore(createMenuDto[0].store_seq);
    const menus: Menu[] = [];
    for (let i = 0; i < createMenuDto.length; i++) {
      const element = createMenuDto[i];
      const menu = new Menu();
      menu.store = store;
      menu.menu_seq = element.menu_seq;
      menu.menu_name = element.menu_name;
      menu.menu_price = element.menu_price;
      menu.menu_etc = element.menu_etc;
      menu.crtUser = element.crtUser;
      menu.udtUser = element.udtUser;
      menus.push(menu);
    }
    await this.menuRepository.save(menus);
  }
  async findAll() {
    return await this.menuRepository.find();
  }

  async findOne(seq: number) {
    const options: FindOneOptions<Menu> = {
      where: {
        menu_seq: seq,
      },
    };
    return await this.menuRepository.findOne(options);
  }
  async update(seq: number, updateMenuDto: UpdateMenuDto) {
    const options: FindOneOptions<Menu> = {
      where: {
        menu_seq: seq,
      },
    };
    const menu = await this.menuRepository.findOne(options);
    if (!menu) {
      throw new NotFoundException(`Store with id ${seq} not found`);
    }
    menu.menu_name = updateMenuDto.menu_name;
    menu.menu_price = updateMenuDto.menu_price;
    menu.menu_etc = updateMenuDto.menu_etc;
    const updatedStore = await this.menuRepository.save(menu);
    return plainToClass(MenuDto, updatedStore);
  }
  async remove(seq: number) {
    const options: FindOneOptions<Menu> = {
      where: {
        menu_seq: seq,
      },
    };
    const menu = await this.menuRepository.findOne(options);
    if (!menu) {
      throw new NotFoundException(`Store with id ${seq} not found`);
    }
    await this.menuRepository.remove(menu);
  }
}
