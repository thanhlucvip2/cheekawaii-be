import { Body, Controller, Post } from '@nestjs/common';
import { ImageCategoryService } from './image-category.service';
import { CreateImageCategoryDto } from './dto/create-image-category.dto';

@Controller('image-category')
export class ImageCategoryController {
  constructor(private readonly imageCategoryService: ImageCategoryService) {}

  @Post()
  create(@Body() payload: CreateImageCategoryDto) {
    return this.imageCategoryService.create(payload);
  }
}
