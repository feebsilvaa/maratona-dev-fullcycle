import { Test, TestingModule } from '@nestjs/testing';
import { TesteControllerController } from './teste-controller.controller';

describe('TesteController Controller', () => {
  let controller: TesteControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesteControllerController],
    }).compile();

    controller = module.get<TesteControllerController>(TesteControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
