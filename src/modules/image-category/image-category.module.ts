import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageCategoryController } from './image-category.controller';
import { ImageCategoryService } from './image-category.service';
import { TbImageCategoryEntity } from './tb_image_category.entity';
import { ImageCategoryRepository } from './image-category.repository';
import { CreateImageCategoryProfile } from './mapper/create-image-category/create-image-category-profile';

@Module({
  imports: [TypeOrmModule.forFeature([TbImageCategoryEntity])],
  controllers: [ImageCategoryController],
  providers: [
    ImageCategoryService,

    ImageCategoryRepository,

    CreateImageCategoryProfile,
  ],
})
export class ImageCategoryModule {}
