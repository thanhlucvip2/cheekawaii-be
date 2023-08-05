import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Query,
  Res,
  Delete,
  Param,
  Req,
  UseGuards,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadFileService } from './upload-file.service';
import { ServiceGuard } from '@modules/auth/guards';
import { AuthGuard } from '@nestjs/passport';
import { GetAllFileFeature } from './features/get-all-file/get-all-file.feature';
import { assign } from 'lodash';
import {
  LoggedInterface,
  RequestCustom,
  ResponseCustom,
} from '@modules/auth/utils/logged.interface';
import { GetAllFileDto } from './features/get-all-file/get-all-file.dto';
import { CreateFolderFeature } from './features/create-folder/create-folder.feature';
import { CreateFolderDto } from './features/create-folder/create-folder.dto';

@UseGuards(AuthGuard('jwt'), ServiceGuard)
@Controller('upload')
export class UploadFileController {
  constructor(
    private readonly getAllFileFeature: GetAllFileFeature,
    private readonly createFolderFeature: CreateFolderFeature,
  ) {}

  @Get()
  async find(
    @Query() queryParam: GetAllFileDto,
    @Req() req: RequestCustom,
    @Res() res: ResponseCustom,
  ) {
    const httpStatusCode = HttpStatus.OK;
    const resData = {
      statusCode: httpStatusCode,
      success: 'get-all-file-success',
      data: null,
    };

    try {
      const { user: currentUser } = req;
      const result = await this.getAllFileFeature.index({
        accountId: currentUser.id,
        currentPath: queryParam.currentPath,
      });

      assign(resData, {
        data: result,
      });
    } catch (error) {
      throw new HttpException(error.message, httpStatusCode);
    }

    return res.status(httpStatusCode).json(resData);
  }

  @Post('create-folder')
  async findOne(
    @Body() payload: CreateFolderDto,
    @Req() req: RequestCustom,
    @Res() res: ResponseCustom,
  ) {
    const httpStatusCode = HttpStatus.OK;
    const resData = {
      statusCode: httpStatusCode,
      success: 'get-one-file-success',
      data: null,
    };

    try {
      const { user: currentUser } = req;
      const result = await this.createFolderFeature.index({
        accountId: currentUser.id,
        payload,
      });

      assign(resData, {
        data: result,
      });
    } catch (error) {
      throw new HttpException(error.message, httpStatusCode);
    }

    return res.status(httpStatusCode).json(resData);
  }

  // @Get(':id')
  // async findById(@Param('id') fileId: string) {
  //   return this.uploadFileService.getOneImage(fileId);
  // }

  // @Get('/file/:id')
  // async downloadFile(@Param('id') id: string, @Res() res) {
  //   res.sendFile(`${URL_FILE}/${id}`, { root: '' });
  // }

  // @Post('/file')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: URL_FILE,
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         const filename = `${uniqueSuffix}${ext}`;
  //         console.log(filename);
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // async handleUpload(@UploadedFile() file: Express.Multer.File) {
  //   return this.uploadFileService.saveFile(file);
  // }

  // @Delete(':id')
  // deleteFile(@Param('id') id: string) {
  //   return this.uploadFileService.delete(id);
  // }

  // @Put(':id')
  // upadateImage(@Param('id') id: string, @Body('fileName') fileName: string) {
  //   return this.uploadFileService.updateFile(id, fileName);
  // }
}
