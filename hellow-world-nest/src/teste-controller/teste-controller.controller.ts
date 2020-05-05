import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('teste-controller')
export class TesteControllerController {

  constructor(private appService: AppService) {

  }

  @Get()
  index() {
    return this.appService.getHello() + " Teste Controller!";
  }

}
