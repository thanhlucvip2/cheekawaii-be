import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '@utils/base-entity';
import { TbImageCategoryEntity } from '@modules/image-category/tb_image_category.entity';

@Entity('tb_image')
export class TbImageEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 10 })
  type: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  size: string;

  @Column({ type: 'text' })
  url: string;

  @Column()
  image_category_id: string;

  @Column()
  account_id: string;

  @ManyToOne(
    () => TbImageCategoryEntity,
    (tbImageCategoryEntity) => tbImageCategoryEntity.tbImage,
  )
  @JoinColumn({ name: 'image_category_id' })
  tbImageCategory: TbImageCategoryEntity;
}
