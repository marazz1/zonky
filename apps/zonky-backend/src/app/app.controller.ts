import { Controller, Get, Query, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('loans/:ratingType')
  getData(@Param('ratingType') ratingType) {
    return this.appService.getAverageAmount(ratingType);
  }
}
