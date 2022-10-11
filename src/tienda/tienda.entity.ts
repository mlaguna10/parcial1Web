import { CafeEntity } from 'src/cafe/cafe.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TiendaEntity {
 
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 nombre: string;
 
 @Column()
 direccion: string;
 
 @Column()
 telefono: string;

 @ManyToOne(() => CafeEntity, cafe => cafe.tiendas)
 cafe: CafeEntity;

 @OneToMany(() => CafeEntity, cafe => cafe.tienda)
 cafes: CafeEntity[];

}