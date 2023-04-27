import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'jumun',
  password: 'hwa30102',
  database: 'jumun',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
