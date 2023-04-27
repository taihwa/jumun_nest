import { MenuDto } from 'src/menu/dto/menu.dto';

export class ResponseStoreDto {
  store_seq: number;
  store_name: string;
  store_category: string;
  store_address: string;
  store_tel: string;
  menus?: MenuDto[];
  crtDate: Date;
  udtDate: Date;
  crtUser: string;
  udtUser: string;
}
