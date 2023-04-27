import { Menu } from 'src/menu/menu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  store_seq: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  store_name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  store_category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  store_address: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  store_tel: string;

  @OneToMany(() => Menu, (menu) => menu.store, { lazy: true })
  menus: Promise<Menu[]>;

  @CreateDateColumn({ type: 'datetime', nullable: false })
  crtDate: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false })
  udtDate: Date;

  @Column({ type: 'varchar', length: 20 })
  crtUser: string;

  @Column({ type: 'varchar', length: 20 })
  udtUser: string;
}
