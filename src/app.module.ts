import { Module } from '@nestjs/common';
import { SampleModule } from '@modules/sample/sample.module';
import { CommonModule } from '@modules/common/common.module';

@Module({
  imports: [CommonModule, SampleModule],
})
export class AppModule {}
