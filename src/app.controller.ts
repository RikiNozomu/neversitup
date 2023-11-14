import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('permutations/:str')
  permutations(@Param('str') str: string) {
    return { result : this.appService.permutations(str) };
  }

  @Post('find-the-odd')
  findTheOdd(@Body() req: { data : number[] }) {
    return { result : this.appService.findTheOdd(req.data) };
  }

  @Post('count-the-smiley-faces')
  countTheSmileyFaces(@Body() req: { data : string[] }) {
    return { result : this.appService.countTheSmileyFaces(req.data) };
  }
}
