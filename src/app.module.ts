import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SampleModule } from '@modules/sample/sample.module';
import { CommonModule } from '@modules/common/common.module';
import rdsConfig from '@config/database/mysql.config';
import mongoConfig from '@config/database/mongo.config';
import appConfig from '@config/app/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfig, rdsConfig, mongoConfig],
    }),
    CommonModule,
    SampleModule,
  ],
})
export class AppModule {}
