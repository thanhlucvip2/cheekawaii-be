import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateImageCategoryDto {
  @AutoMap()
  @IsNotEmpty({ message: 'parentPath-empty' })
  @Length(1, 1000)
  parentPath: string;

  @AutoMap()
  @IsNotEmpty({ message: 'name-empty' })
  @Length(1, 1000)
  name: string;
}
