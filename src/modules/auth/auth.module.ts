import { Module } from '@nestjs/common';

import { AccountModule } from '@modules/account/account.module';

import { AuthService } from './auth.service';
import { AuthLoginController } from './controllers/auth-login.controller';
import { JwtStrategy } from './strategys';

@Module({
  imports: [AccountModule],
  controllers: [AuthLoginController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
