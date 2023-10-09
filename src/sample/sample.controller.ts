import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IPostTestBodyData } from './interfaces';

@Controller('sample')
export class SampleController {
  // Get Api
  @Get('test')
  getTestApi() {
    return 'Hello Ryan!!';
  }

  // Get Params Data Api
  @Get('test/:id')
  getParamsIdApi(@Param('id') id: string) {
    return `This is Params ID : ${id}`;
  }

  // Get Query Data Api
  @Get('test')
  getQueryDataApi(@Query('search') search: string) {
    return `This is Query Data: ${search}`;
  }

  // Post Body Data Api
  @Post('test')
  postBodyApi(@Body() IBodyData: IPostTestBodyData) {
    return `This is Body Data : ${IBodyData}`;
  }
}
