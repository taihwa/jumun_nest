import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '211.216.72.163',
  username: 'deps',
  password: 'deps@admin',
  port: 3316,
  database: 'deps',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // synchronize: true,
  // ssl: {
  //   rejectUnauthorized: true,
  // },
};
