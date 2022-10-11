import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CafeEntity {
 
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 nombre: string;
 
 @Column()
 descripcion: string;
 
 @Column()
 precio: number;

 @OneToMany(() => TiendaEntity, tienda => tienda.cafe)
   tiendas: TiendaEntity[];
   
 @ManyToOne(() => TiendaEntity, tienda => tienda.cafes)
 tienda: TiendaEntity;
}
