import { AutoMap } from '@automapper/classes';

export class CreateImageCategoryMapper {
  @AutoMap()
  parent_path: number;

  @AutoMap()
  current_path: number;

  @AutoMap()
  name: number;
}
