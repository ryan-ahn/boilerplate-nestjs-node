import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  getData(): string[] {
    return ['item1', 'item2', 'item3'];
  }
}
