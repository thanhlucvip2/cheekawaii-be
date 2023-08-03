import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, Length } from 'class-validator';

export class GetImageCategoryDto {
  @AutoMap()
  @IsNotEmpty({ message: 'current-path-empty' })
  @Length(1, 1000)
  parentPath: string;
}
