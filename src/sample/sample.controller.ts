import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('sample')
export class SampleController {
  // Get Api
  @Get('test')
  getTestApi() {
    return 'Hello Ryan!!';
  }

  // Get Params Api
  @Get('test/:id')
  getParamsIdApi(@Param('id') id: string) {
    return `This is Params ID : ${id}`;
  }

  // Post Api
  @Post('test')
  postTestApi() {
    return 'Hello Ryan!!';
  }

  // Post Body Api
  @Post('test')
  postBodyApi(@Body() IBodyData) {
    return `This is Body Data : ${IBodyData}`;
  }
}
