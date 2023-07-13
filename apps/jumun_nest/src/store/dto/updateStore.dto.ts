import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStoreDto {
  @IsNotEmpty()
  store_seq: number;

  @IsNotEmpty()
  @IsString()
  store_name: string;

  @IsNotEmpty()
  @IsString()
  store_category: string;

  store_address: string;

  store_tel: string;

  @IsNotEmpty()
  @IsString()
  udtUser: string;
}
