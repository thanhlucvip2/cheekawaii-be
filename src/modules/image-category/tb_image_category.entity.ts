import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@utils/base-entity';
import { TbImageEntity } from '@modules/image/tb_image.entity';
import { TbAccountEntity } from '@modules/account/tb_account.entity';
import { AutoMap } from '@automapper/classes';

@Entity('tb_image_category')
export class TbImageCategoryEntity extends BaseEntity {
  @AutoMap()
  @Column({ type: 'varchar', length: 1000 })
  parent_path: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 1000 })
  current_path: string;

  @AutoMap()
  @Column({ type: 'nvarchar', length: 1000 })
  name: string;

  @Column()
  account_id: string;

  @AutoMap()
  @OneToMany(
    () => TbImageEntity,
    (tbImageEntity) => tbImageEntity.tbImageCategory,
  )
  tbImage?: TbImageEntity[];

  @AutoMap()
  @ManyToOne(() => TbAccountEntity, (tbAccount) => tbAccount.tbImageCategory)
  @JoinColumn({ name: 'account_id' })
  tbAccount?: TbAccountEntity;
}
