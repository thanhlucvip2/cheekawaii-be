import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';
import { UploadFileEntity } from './upload-file.entity';
import { UploadFileRepository } from './upload-file.repository';
import { GetFileProfile } from './mapper/get-file-profile';
import { GetAllFileFeature } from './features/get-all-file/get-all-file.feature';
import { CreateFolderFeature } from './features/create-folder/create-folder.feature';

@Module({
  imports: [TypeOrmModule.forFeature([UploadFileEntity])],
  controllers: [UploadFileController],
  providers: [
    UploadFileService,
    UploadFileRepository,

    GetFileProfile,

    GetAllFileFeature,
    CreateFolderFeature,
  ],
})
export class UploadFileModule {}
