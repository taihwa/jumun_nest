import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/createStore.dto';
import { Public } from 'src/auth/decorator/public.decorator';
import { UpdateStoreDto } from './dto/updateStore.dto';
import { ResponseStoreDto } from './dto/responseStore.dto';

@Controller('api/store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Public()
  @Post('/create')
  async createStore(@Body() createStoreDto: CreateStoreDto) {
    return await this.storeService.createStore(createStoreDto);
  }

  @Public()
  @Get('/findAll')
  async findAllStore() {
    const stores = await this.storeService.findAllStore();
    return stores;
  }

  @Public()
  @Get('/:storeId')
  async findOneStore(@Param('storeId', ParseIntPipe) storeId: number) {
    return await this.storeService.findStore(storeId);
  }

  @Public()
  @Put('/:id')
  async updateStore(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStoreDto: UpdateStoreDto,
  ): Promise<ResponseStoreDto> {
    return await this.storeService.updateStore(id, updateStoreDto);
  }

  @Public()
  @Delete(':id')
  async removeStore(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const result = await this.storeService.removeStore(id);
  }
}
