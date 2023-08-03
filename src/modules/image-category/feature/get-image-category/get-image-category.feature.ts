import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { ImageCategoryService } from '@modules/image-category/image-category.service';

@Injectable()
export class GetImageCategoryFeature {
  constructor(
    private readonly imageCategoryService: ImageCategoryService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async index(parentPath: string) {
    return parentPath;
  }
}
