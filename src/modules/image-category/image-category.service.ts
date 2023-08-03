import { Injectable } from '@nestjs/common';

import { ImageCategoryRepository } from './image-category.repository';
import { TbImageCategoryEntity } from './tb_image_category.entity';

@Injectable()
export class ImageCategoryService {
  constructor(
    private readonly imageCategoryRepository: ImageCategoryRepository,
  ) {}

  async create(data: TbImageCategoryEntity) {
    const newImageCategory = await this.imageCategoryRepository.create(data);
    await this.imageCategoryRepository.save(newImageCategory);
    return newImageCategory;
  }

  async find(id: string) {
    return await this.imageCategoryRepository.find({
      where: { id },
    });
  }

  async findAccountId(accountId: string) {
    return await this.imageCategoryRepository.find({
      where: { account_id: accountId },
    });
  }

  async findOne(id: string, relations?: string[]) {
    return await this.imageCategoryRepository.findOne({
      where: { id },
      relations: relations,
    });
  }

  async findByParentPath(parentPath: string) {
    return await this.imageCategoryRepository.find({
      where: { parent_path: parentPath },
    });
  }

  async findOneByCurrentPath(currentPath: string, relations?: string[]) {
    return await this.imageCategoryRepository.findOne({
      where: { current_path: currentPath },
      relations: relations,
    });
  }

  async findOneByCurrentPathAndParentPath(data: {
    currentPath: string;
    parentPath: string;
    relations?: string[];
  }) {
    return await this.imageCategoryRepository.findOne({
      where: { current_path: data.currentPath, parent_path: data.parentPath },
      relations: data.relations,
    });
  }
}
