import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLoginController } from './controllers/auth-login.controller';
import { JwtStrategy } from './strategys';

@Module({
  imports: [],
  controllers: [AuthLoginController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
