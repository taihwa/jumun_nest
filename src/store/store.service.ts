import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { Menu } from 'src/menu/menu.entity';
import { CreateStoreDto } from './dto/createStore.dto';
import { ResponseStoreDto } from './dto/responseStore.dto';
import { UpdateStoreDto } from './dto/updateStore.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async createStore(createStoreDto: CreateStoreDto) {
    const { storeName, storeCategory, storeAddress, storeTel, crtUser } =
      createStoreDto;
    return await this.storeRepository.save({
      store_name: storeName,
      store_category: storeCategory,
      store_address: storeAddress,
      store_tel: storeTel,
      crtUser,
      udtUser: crtUser,
    });
  }

  async findAllStore() {
    return await this.storeRepository.find();
  }

  async findStore(storeId: number) {
    const options: FindOneOptions<Store> = {
      where: {
        store_seq: storeId,
      },
    };
    return await this.storeRepository.findOne(options);
  }

  async updateStore(seq: number, updateStoreDto: UpdateStoreDto) {
    const options: FindOneOptions<Store> = {
      where: {
        store_seq: seq,
      },
    };
    const store = await this.storeRepository.findOne(options);
    if (!store) {
      throw new NotFoundException(`Store with id ${seq} not found`);
    }
    store.store_name = updateStoreDto.store_name;
    store.store_category = updateStoreDto.store_category;
    store.store_address = updateStoreDto.store_address;
    store.store_tel = updateStoreDto.store_tel;
    const updatedStore = await this.storeRepository.save(store);
    return plainToClass(ResponseStoreDto, updatedStore);
  }

  async removeStore(seq: number): Promise<void> {
    const options: FindOneOptions<Store> = {
      where: {
        store_seq: seq,
      },
    };
    const store = await this.storeRepository.findOne(options);
    if (!store) {
      throw new NotFoundException(`Store with id ${seq} not found`);
    }
    await this.storeRepository.remove(store);
  }
}
