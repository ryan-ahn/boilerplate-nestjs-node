import { Module } from '@nestjs/common';
import { CommonModule } from '@modules/common/common.module';
import { SampleModule } from '@modules/sample/sample.module';

@Module({
  imports: [CommonModule, SampleModule],
})
export class AppModule {}
