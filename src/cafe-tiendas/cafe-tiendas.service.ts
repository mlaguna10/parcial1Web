import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CafeEntity } from 'src/cafe/cafe.entity';
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CafeTiendasService {
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>,
    
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ) {}

    async addCafeToTienda(cafeId: number, tiendaId: number): Promise<CafeEntity> {
        const tienda: TiendaEntity = await this.tiendaRepository.findOne({where: {id: tiendaId}});
        if (!tienda)
            null;
          //throw new BusinessLogicException("The artwork with the given id was not found", BusinessError.NOT_FOUND);
      
        const cafe: CafeEntity = await this.cafeRepository.findOne({where: {id: cafeId}, relations: ["tiendas"]})
        if (!cafe)
            null;
          //throw new BusinessLogicException("The museum with the given id was not found", BusinessError.NOT_FOUND);
    
        cafe.tiendas = [...cafe.tiendas, tienda];
        return await this.cafeRepository.save(cafe);
      }
}
