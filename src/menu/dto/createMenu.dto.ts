import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  menu_name: string;

  @IsNotEmpty()
  @IsNumber()
  menu_price: number;

  @IsString()
  menu_etc: string;

  @IsNotEmpty()
  store_seq: number;
}
