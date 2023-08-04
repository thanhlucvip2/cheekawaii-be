import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { assign } from 'lodash';

import {
  LoggedInterface,
  RequestCustom,
  ResponseCustom,
} from '@modules/auth/utils/logged.interface';

import { CreateImageCategoryDto } from './feature/create-image-category/create-image-category.dto';
import { AuthGuard } from '@nestjs/passport';
import { ServiceGuard } from '@modules/auth/guards';
import { CreateImageCategoryFeature } from './feature/create-image-category/create-image-category.feature';
import { convertVNStringToKeyString } from '@utils/helper';

@UseGuards(AuthGuard('jwt'), ServiceGuard)
@Controller('image-category')
export class ImageCategoryController {
  constructor(
    private readonly createImageCategoryFeature: CreateImageCategoryFeature,
  ) {}

  @Post()
  async create(
    @Body() payload: CreateImageCategoryDto,
    @Req() req: RequestCustom,
    @Res() res: ResponseCustom,
  ) {
    const httpStatusCode = HttpStatus.OK;
    const resData = {
      statusCode: httpStatusCode,
      success: 'create-image-category-success',
      data: null,
    };

    try {
      const { user } = req;
      const userCurrent: LoggedInterface = user;

      const result = await this.createImageCategoryFeature.index(
        payload,
        userCurrent.id,
      );

      assign(resData, {
        data: result,
      });
    } catch (error) {
      throw new HttpException(error.message, httpStatusCode);
    }

    return res.status(httpStatusCode).json(resData);
  }

  @Get()
  async find(
    @Body() payload: CreateImageCategoryDto,
    @Req() req: RequestCustom,
    @Res() res: ResponseCustom,
  ) {
    const httpStatusCode = HttpStatus.OK;
    const resData = {
      statusCode: httpStatusCode,
      success: 'get-image-category-success',
      data: null,
    };

    // try {
    //   const { user } = req;
    //   const userCurrent: LoggedInterface = user;

    //   const result = await this.createImageCategoryFeature.index(
    //     payload,
    //     userCurrent.id,
    //   );

    //   assign(resData, {
    //     data: result,
    //   });
    // } catch (error) {
    //   throw new HttpException(error.message, httpStatusCode);
    // }

    return res.status(httpStatusCode).json(resData);
  }
}
