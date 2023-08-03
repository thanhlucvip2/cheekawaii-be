import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageCategoryController } from './image-category.controller';
import { ImageCategoryService } from './image-category.service';
import { TbImageCategoryEntity } from './tb_image_category.entity';
import { ImageCategoryRepository } from './image-category.repository';
import { CreateImageCategoryProfile } from './mapper/create-image-category/create-image-category-profile';
import { CreateImageCategoryFeature } from './feature/create-image-category/create-image-category.feature';

@Module({
  imports: [TypeOrmModule.forFeature([TbImageCategoryEntity])],
  controllers: [ImageCategoryController],
  providers: [
    ImageCategoryService,

    ImageCategoryRepository,

    CreateImageCategoryProfile,

    CreateImageCategoryFeature,
  ],
})
export class ImageCategoryModule {}
