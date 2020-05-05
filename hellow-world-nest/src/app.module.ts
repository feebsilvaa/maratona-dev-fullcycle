import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteControllerController } from './teste-controller/teste-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, TesteControllerController],
  providers: [AppService],
})
export class AppModule {}
