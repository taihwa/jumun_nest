import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMenuDto {
  @IsOptional()
  @IsString()
  menu_name: string;

  @IsOptional()
  @IsNumber()
  menu_price: number;

  @IsOptional()
  @IsString()
  menu_etc: string;

  @IsNotEmpty()
  store_seq: number;
}
