import { Controller, Get } from '@nestjs/common';
import { CommonService } from '@modules/common/common.service';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get()
  getData(): string[] {
    return this.commonService.getData();
  }
}
