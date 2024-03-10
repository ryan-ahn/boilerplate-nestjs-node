import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getData(): string[] {
    return ['item1', 'item2', 'item3'];
  }
}
