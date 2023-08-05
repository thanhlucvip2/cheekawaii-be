import { Injectable } from '@nestjs/common';
import { UploadFileRepository } from './upload-file.repository';
import { UploadFileEntity } from './upload-file.entity';
import { GetFileMapper } from './mapper/get-file.mapper';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class UploadFileService {
  constructor(
    private readonly uploadFileRepository: UploadFileRepository,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {}

  async find(condition?: Partial<UploadFileEntity>, relations?: string[]) {
    const data = await this.uploadFileRepository.find({
      where: {
        ...condition,
      },
      relations: relations,
    });

    const result = this.mapper.mapArray(data, UploadFileEntity, GetFileMapper);

    return result;
  }

  async create(payload: UploadFileEntity) {
    const newData = await this.uploadFileRepository.create(payload);
    await this.uploadFileRepository.save(payload);
    const result = this.mapper.map(newData, UploadFileEntity, GetFileMapper);
    return result;
  }

  async findOneByCurrentPathAndPath(payload: {
    currentPath: string;
    accountId: string;
    path: string;
  }) {
    const data = await this.uploadFileRepository.findOne({
      where: {
        current_path: payload.currentPath,
        path: payload.path,
        account_id: payload.accountId,
      },
    });
    const result = this.mapper.map(data, UploadFileEntity, GetFileMapper);
    return result;
  }
  // async getOneImage(fileId: string) {
  //   const image = await this.uploadFileRepository.findOne({
  //     where: { fileId },
  //   });
  //   if (!image) {
  //     throw new HttpException(
  //       'Image không tồn tại trong hệ thống',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   return image;
  // }

  // async saveFile(file: Express.Multer.File) {
  //   if (!file) {
  //     throw new HttpException('Vui lòng gửi đúng file', HttpStatus.BAD_REQUEST);
  //   }
  //   const sizeMB = (file.size / 1024 ** 2).toFixed(2);

  //   const dataFile = {
  //     typeFile: file.fieldname,
  //     size: `${sizeMB} MB`,
  //     fileName: file.originalname,
  //     fileId: file.filename,
  //     urlFile: `/upload/file/${file.filename}`,
  //   };
  //   const newFileDB = await this.uploadFileRepository.create(dataFile);
  //   await this.uploadFileRepository.save(newFileDB);
  //   return newFileDB;
  // }

  // async delete(fileId: string) {
  //   const image = await this.uploadFileRepository.findOne({
  //     where: { fileId },
  //   });
  //   if (!image) {
  //     throw new HttpException(
  //       'Image không tồn tại trong hệ thống',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   unlinkSync(`${URL_FILE}/${image.fileId}`);
  //   await this.uploadFileRepository.delete({ fileId });
  //   return 'Xóa thành công!';
  // }

  // async updateFile(fileId: string, fileName: string) {
  //   if (!fileName) {
  //     throw new HttpException(
  //       'Vui lòng điền đủ thông tin',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   const image = await this.uploadFileRepository.findOne({
  //     where: { fileId },
  //   });
  //   if (!image) {
  //     throw new HttpException(
  //       'Image không tồn tại trong hệ thống',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   await this.uploadFileRepository.update({ fileId }, { ...image, fileName });
  //   return await this.uploadFileRepository.findOne({ where: { fileId } });
  // }
}
