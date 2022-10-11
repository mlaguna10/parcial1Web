import { Test, TestingModule } from '@nestjs/testing';
import { CafeTiendasService } from './cafe-tiendas.service';

describe('CafeTiendasService', () => {
  let service: CafeTiendasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeTiendasService],
    }).compile();

    service = module.get<CafeTiendasService>(CafeTiendasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
