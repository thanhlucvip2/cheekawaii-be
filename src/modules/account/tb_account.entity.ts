import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@utils/base-entity';
import { ROLE } from '@utils/enums';

@Entity('tb_account')
export class TbAccountEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({
    type: 'smallint',
    width: 1,
    nullable: true,
    default: ROLE.USER.VALUE,
  })
  role: string;
}
