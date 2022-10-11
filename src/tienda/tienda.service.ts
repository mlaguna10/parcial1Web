import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda.entity';

@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ){}

    async createTienda(tienda: TiendaEntity): Promise<TiendaEntity> {
        if(tienda.telefono.length==10){
            return await this.tiendaRepository.save(tienda);
        }
        else{
            return null;
        }   
    }
}
