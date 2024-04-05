import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { SlackService } from './utils/helper/slack/slack.service';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private slackService: SlackService,
  ) {}

  getClear() {
    return 'server clear!';
  }
}
