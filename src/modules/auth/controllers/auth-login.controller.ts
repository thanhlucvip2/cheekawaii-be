import { ResponseSuccessInterface } from '@model/response-success.interface';
import { API_PREFIX_PATH } from '@configs/app.config';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { assign } from 'lodash';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from '../auth.service';
import { AuthLoginDTO } from '../dto';

@Controller(`${API_PREFIX_PATH}/auth`)
export class AuthLoginController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth('token')
  @ApiTags('Auth')
  @ApiCreatedResponse({ description: 'Login-success' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDTO, @Res() res: Response) {
    const resData: ResponseSuccessInterface = {
      statusCode: HttpStatus.OK,
      success: 'login-success',
      data: null,
    };

    try {
      const accountDB = { password: 'dasdas', username: '11', id: 1 };
      if (accountDB === null) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      // const checkPasswordHash = this.authService.comparePassword(
      //   authLoginDto.password,
      //   accountDB.password,
      // );
      // if (!checkPasswordHash) {
      //   throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
      // }

      const token = await this.authService.createTokenAndRefreshToken(
        accountDB.id,
      );

      assign(resData, {
        data: {
          token,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

    return res.status(HttpStatus.OK).json(resData);
  }
}
