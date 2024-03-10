import { Controller, Get } from '@nestjs/common';
import { SampleService } from '@modules/sample/sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  getData(): string[] {
    return this.sampleService.getData();
  }
}
