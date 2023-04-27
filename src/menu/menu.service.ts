import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/createMenu.dto';
import { UpdateMenuDto } from './dto/updateMenu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { MenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}
  async create(createMenuDto: CreateMenuDto) {
    const { menu_name, menu_price, menu_etc, store_seq } = createMenuDto;
    await this.menuRepository.save({
      menu_name,
      menu_price,
      menu_etc,
      store_seq,
    });
  }
  async findAll() {
    await this.menuRepository.find();
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
