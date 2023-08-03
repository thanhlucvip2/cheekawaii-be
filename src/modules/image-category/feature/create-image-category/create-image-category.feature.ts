import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { CreateImageCategoryDto } from './create-image-category.dto';
import { CreateImageCategoryMapper } from '@modules/image-category/mapper/create-image-category/create-image-category.mapper';
import { ImageCategoryService } from '@modules/image-category/image-category.service';

@Injectable()
export class CreateImageCategoryFeature {
  constructor(
    private readonly imageCategoryService: ImageCategoryService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async index(payload: CreateImageCategoryDto, id: string) {
    const payloadMapper = this.mapper.map(
      payload,
      CreateImageCategoryDto,
      CreateImageCategoryMapper,
    );
    const checkCurrentPath =
      await await this.imageCategoryService.findOneByCurrentPathAndParentPath({
        currentPath: payloadMapper.current_path,
        parentPath: payloadMapper.parent_path,
      });

    if (checkCurrentPath) {
      throw new HttpException(
        'Thư mục không được trùng',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newImageCategory = await this.imageCategoryService.create({
      ...payloadMapper,
      account_id: id,
    });

    return newImageCategory;
  }
}
