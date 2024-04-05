import { Module } from '@nestjs/common';
import { GlobalModule } from '@modules/global/global.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [GlobalModule],
  exports: [GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
