import { SlackService } from '@utils/helper/slack/slack.service';
import { PrismaClient } from '@prisma/client';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private slackService: SlackService) {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.slackService.sendSystemMessage('S7000001');
    } catch (error) {
      this.slackService.sendErrorMessage('F7000001');
    }
  }
}
