import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { CommonController } from './common/common.controller';
import { SampleController } from './sample/sample.controller';

@Module({
  imports: [],
  controllers: [AuthController, CommonController, SampleController],
  providers: [],
})
export class AppModule {}
