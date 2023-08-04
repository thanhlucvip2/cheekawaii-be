import { AutoMap } from '@automapper/classes';

export class CreateImageCategoryMapper {
  @AutoMap()
  parent_path: string;

  @AutoMap()
  name: string;
}
