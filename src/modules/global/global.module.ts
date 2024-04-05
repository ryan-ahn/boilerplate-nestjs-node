import { SlackModule } from '@utils/helper/slack/slack.module';
import { PrismaModule } from '@providers/database/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import rdsConfig from '@config/database/rds.config';
import appConfig from '@config/app/app.config';
import { GlobalService } from './global.service';
import { GlobalController } from './global.controller';

@Global()
@Module({
  imports: [
    HttpModule,
    SlackModule,
    PrismaModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfig, rdsConfig],
    }),
  ],
  exports: [HttpModule, SlackModule, PrismaModule, ConfigModule],
  controllers: [GlobalController],
  providers: [GlobalService],
})
export class GlobalModule {}
