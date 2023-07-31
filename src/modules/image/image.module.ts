import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TbImageEntity } from './tb_image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TbImageEntity])],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
