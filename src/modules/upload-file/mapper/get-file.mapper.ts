import { AutoMap } from '@automapper/classes';

export class GetFileMapper {
  @AutoMap()
  createAt: Date;

  @AutoMap()
  updateAt: Date;

  @AutoMap()
  note: string;

  @AutoMap()
  typeFile: string;

  @AutoMap()
  size: number;

  @AutoMap()
  name: string;

  @AutoMap()
  urlFile: string;

  @AutoMap()
  type: string;

  @AutoMap()
  currentPath: string;

  @AutoMap()
  path: string;
}
