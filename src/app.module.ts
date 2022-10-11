import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';
import { CafeTiendasModule } from './cafe-tiendas/cafe-tiendas.module';

@Module({
  imports: [CafeModule, TiendaModule, CafeTiendasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
