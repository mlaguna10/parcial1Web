import { Test, TestingModule } from '@nestjs/testing';
import { TiendaEntity } from './tienda.entity';
import { TiendaService } from './tienda.service';

describe('TiendaService', () => {
  let service: TiendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiendaService],
    }).compile();

    service = module.get<TiendaService>(TiendaService);
  });

  service = module.get<TiendaService>(TiendaService);
  repository = module.get<Repository<TiendaEntity>>(getRepositoryToken(TiendaEntity));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new tienda', async () => {
    const tienda: TiendaEntity = {
      id: 1,
      nombre: faker.name.fullName(),
      direccion: faker.lorem.sentence(),
      telefono: 12,
      cafes: []
    }
  
    const newTienda: TiendaEntity = await service.createTienda(tienda);
    expect(newTienda).not.toBeNull();

  });
});
