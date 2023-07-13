import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDto {
  menu_seq: number;

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

  crtUser: string;
  udtUser: string;
}
