import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@utils/base-entity';
import { ROLE } from '@utils/enums';

@Entity('tb_account')
export class TbAccountEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  email: number;

  @Column({ type: 'varchar', length: 100 })
  first_name: number;

  @Column({ type: 'varchar', length: 100 })
  last_name: number;

  @Column({ type: 'varchar', length: 100 })
  password: number;

  @Column({
    type: 'smallint',
    width: 1,
    nullable: true,
    default: ROLE.USER.VALUE,
  })
  role: number;
}
