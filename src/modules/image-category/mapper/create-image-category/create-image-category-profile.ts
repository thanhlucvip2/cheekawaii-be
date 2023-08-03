import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  CamelCaseNamingConvention,
  createMap,
  namingConventions,
  SnakeCaseNamingConvention,
  type Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CreateImageCategoryMapper } from './create-image-category.mapper';
import { CreateImageCategoryDto } from '@modules/image-category/dto/create-image-category.dto';

@Injectable()
export class CreateImageCategoryProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        CreateImageCategoryDto,
        CreateImageCategoryMapper,
        namingConventions({
          source: new CamelCaseNamingConvention(),
          destination: new SnakeCaseNamingConvention(),
        }),
      );
    };
  }
}
