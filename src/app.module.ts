import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { NoXPoweredByMiddleware } from '@middlewares/no-x-powered-by.middleware';
import { THROTTLE_LIMIT, THROTTLE_TTL } from '@utils/constants';
import { DatabaseModule } from '@database/database.module';
import { ImageModule } from '@modules/image/image.module';
import { ImageCategoryModule } from '@modules/image-category/image-category.module';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ImageModule,
    ImageCategoryModule,
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: THROTTLE_TTL,
      limit: THROTTLE_LIMIT,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NoXPoweredByMiddleware).forRoutes('*');
  }
}
