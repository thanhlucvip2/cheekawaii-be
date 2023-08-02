import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

import { JWT_SECRET_KEY } from '@configs/app.config';
import { LoggedInterface } from '@modules/auth/utils/logged.interface';
import { ROLE } from '@utils/enums';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    const id = payload?.id;
    const accountDB = {
      username: 'thanhlucvip',
      email: 'doanthanhluc91bvh@gmail.com',
      role: ROLE.ADMIN.VALUE,
    };
    if (!accountDB) {
      return done(new UnauthorizedException('unauthorized-access'), false);
    }

    const data: LoggedInterface = {
      id,
      email: accountDB.email,
      username: accountDB.username,
      role: accountDB.role,
    };

    return done(null, data);
  }
}
