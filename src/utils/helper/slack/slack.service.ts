import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SlackService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private readonly devWebhookUrl =
    'https://hooks.slack.com/services/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';

  private getWebhookUrl(key: string): string {
    const serverEnv = this.configService.get<string>('app.serverEnv');
    return serverEnv === 'production'
      ? this.configService.get<string>(key)
      : this.devWebhookUrl;
  }

  public async sendErrorMessage(text: string): Promise<void> {
    const webhookUrl = this.getWebhookUrl('app.slackWebhookErrorUrl');
    const response$ = this.httpService.post(webhookUrl, { text });
    await firstValueFrom(response$);
  }

  public async sendSystemMessage(text: string): Promise<void> {
    const webhookUrl = this.getWebhookUrl('app.slackWebhookAutoUrl');
    const response$ = this.httpService.post(webhookUrl, { text });
    await firstValueFrom(response$);
  }
}
