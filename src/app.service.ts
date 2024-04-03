import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello() {
    const host = this.configService.get<string>('API_HOST');
    const port = this.configService.get<number>('PORT', 8000);
    return {
      host,
      port,
    };
  }
}
