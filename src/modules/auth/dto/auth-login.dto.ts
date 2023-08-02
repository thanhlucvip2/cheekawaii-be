import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

import { IsMailSpam } from '@validations/is-email-spam';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDTO {
  @ApiProperty({
    example: 'doanthanhluc@gmail.com',
  })
  @IsNotEmpty({ message: 'email-empty' })
  @Validate(IsMailSpam)
  @IsEmail({}, { message: 'email-format-wrong' })
  username: string;

  @ApiProperty({
    example: 'hachee-studio',
  })
  @IsNotEmpty({ message: 'password-empty' })
  @MinLength(8, { message: 'password-min-6' })
  @MaxLength(20, { message: 'password-max-20' })
  password: string;
}
