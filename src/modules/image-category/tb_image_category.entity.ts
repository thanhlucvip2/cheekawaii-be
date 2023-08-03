import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@utils/base-entity';
import { TbImageEntity } from '@modules/image/tb_image.entity';
import { TbAccountEntity } from '@modules/account/tb_account.entity';

@Entity('tb_image_category')
export class TbImageCategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 1000 })
  parent_path: string;

  @Column({ type: 'varchar', length: 1000 })
  current_path: string;

  @Column({ type: 'varchar', length: 1000 })
  name: string;

  @OneToMany(
    () => TbImageEntity,
    (tbImageEntity) => tbImageEntity.tbImageCategory,
  )
  tbImage: TbImageEntity[];

  @ManyToOne(() => TbAccountEntity, (tbAccount) => tbAccount.tbImageCategory)
  tbAccount: TbAccountEntity;
}
