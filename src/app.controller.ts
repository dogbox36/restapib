import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Delete,
  Param,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import NewElefantDto from './Elefant.dto';
import { Elefant } from './Elefant.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('api/elefant')
  async listElefant() {
    const repo = this.dataSource.getRepository(Elefant);
    return await repo.find();
  }

  @Post('api/elefant')
  async postElefant(@Body() elefant: NewElefantDto) {
    elefant.elefantid = undefined;
    const Repo = this.dataSource.getRepository(Elefant);
    await Repo.save(elefant);
  }

  @Delete('api/elefant/:id')
  async deleteElefant(@Param('id') elefantid: number) {
    const Repo = this.dataSource.getRepository(Elefant);
    await Repo.delete(elefantid);
  }
}
