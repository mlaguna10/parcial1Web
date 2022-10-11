import { Test, TestingModule } from '@nestjs/testing';
import { CafeEntity } from './cafe.entity';
import { CafeService } from './cafe.service';
import { faker } from '@faker-js/faker';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
  });

  service = module.get<CafeService>(CafeService);
  repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new cafe', async () => {
    const cafe: CafeEntity = {
      id: 1,
      nombre: faker.name.fullName(),
      descripcion: faker.lorem.sentence(),
      precio: 12,
      tiendas: []
    }
  
    const newCafe: CafeEntity = await service.createCafe(cafe);
    expect(newCafe).not.toBeNull();
  
    const storedCafe: CafeEntity = await repository.findOne({where: {id: newCafe.id}})
    expect(storedCafe).not.toBeNull();
    expect(storedCafe.nombre).toEqual(newCafe.nombre)
    expect(storedCafe.descripcion).toEqual(newCafe.descripcion)
    expect(storedCafe.precio).toEqual(newCafe.precio)
  });
});
