import { Store } from 'src/store/store.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  menu_seq: number;

  @Column()
  menu_name: string;

  @Column()
  menu_price: number;

  @Column()
  menu_etc: string;

  @Column({ default: 'Y' })
  use_yn: string;

  @ManyToOne(() => Store, (store) => store.menus, { onDelete: 'CASCADE' })
  store: Store;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  crtDate: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  udtDate: Date;

  @Column()
  crtUser: string;

  @Column()
  udtUser: string;
}
