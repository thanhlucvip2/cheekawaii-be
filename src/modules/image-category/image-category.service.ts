import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { ImageCategoryRepository } from './image-category.repository';
import { CreateImageCategoryDto } from './dto/create-image-category.dto';
import { CreateImageCategoryMapper } from './mapper/create-image-category/create-image-category.mapper';

@Injectable()
export class ImageCategoryService {
  constructor(
    private readonly imageCategoryRepository: ImageCategoryRepository,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}
  async create(data: CreateImageCategoryDto) {
    return this.mapper.mapAsync(
      data,
      CreateImageCategoryDto,
      CreateImageCategoryMapper,
    );
  }
}
