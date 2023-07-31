import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageCategoryController } from './image-category.controller';
import { ImageCategoryService } from './image-category.service';
import { TbImageCategoryEntity } from './tb_image_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TbImageCategoryEntity])],
  controllers: [ImageCategoryController],
  providers: [ImageCategoryService],
})
export class ImageCategoryModule {}
