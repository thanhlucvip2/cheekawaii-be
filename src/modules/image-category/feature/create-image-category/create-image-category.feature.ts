import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { CreateImageCategoryDto } from './create-image-category.dto';
import { CreateImageCategoryMapper } from '@modules/image-category/mapper/create-image-category/create-image-category.mapper';
import { ImageCategoryService } from '@modules/image-category/image-category.service';
import { convertVNStringToKeyString } from '@utils/helper';

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
    const current_path = convertVNStringToKeyString(payload.name);

    const checkParentPath =
      await this.imageCategoryService.findOneByCurrentPath(payload.parentPath);

    if (!checkParentPath) {
      throw new HttpException(
        'Thư mục cha không tồn tại trong kệ thống',
        HttpStatus.BAD_REQUEST,
      );
    }

    const checkCurrentPath =
      await await this.imageCategoryService.findOneByCurrentPathAndParentPath({
        currentPath: current_path,
        parentPath: payloadMapper.parent_path,
      });

    if (checkCurrentPath) {
      throw new HttpException(
        'Tên Thư mục không được trùng',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newImageCategory = await this.imageCategoryService.create({
      ...payloadMapper,
      current_path: `/${current_path}`,
      account_id: id,
    });

    return newImageCategory;
  }
}
