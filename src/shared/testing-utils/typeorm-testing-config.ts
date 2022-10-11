/* eslint-disable prettier/prettier */
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { CafeEntity } from 'src/cafe/cafe.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [CafeEntity, TiendaEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([CafeEntity, TiendaEntity]),
];