import { Module } from '@nestjs/common';
import { CafeTiendasService } from './cafe-tiendas.service';

@Module({
  providers: [CafeTiendasService]
})
export class CafeTiendasModule {}
