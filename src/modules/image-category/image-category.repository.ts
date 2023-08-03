import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TbImageCategoryEntity } from './tb_image_category.entity';

export class ImageCategoryRepository extends Repository<TbImageCategoryEntity> {
  constructor(
    @InjectRepository(TbImageCategoryEntity)
    private imageCategoryRepository: Repository<TbImageCategoryEntity>,
  ) {
    super(
      imageCategoryRepository.target,
      imageCategoryRepository.manager,
      imageCategoryRepository.queryRunner,
    );
  }
}
