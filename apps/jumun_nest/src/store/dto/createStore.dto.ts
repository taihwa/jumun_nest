import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  storeName: string;

  @IsNotEmpty()
  @IsString()
  storeCategory: string;

  storeAddress: string;

  storeTel: string;

  storeImg: string;

  @IsNotEmpty()
  @IsString()
  crtUser: string;
}
