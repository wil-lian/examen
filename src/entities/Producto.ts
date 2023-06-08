import { Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producto')
export class Producto {

    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;

    @Column({ name: 'CODIGO' })
    codigo: string;
    
    @Column({ name: 'ES_NACIONAL' })
    es_nacional: number;

    @Column({ name: 'NOMBRE' })
    nombre: string;

    @Column({ name: 'PRECIO' })
    precio: number;

    @CreateDateColumn({ name: "FECHA_REGISTRO" })
    fechaRegistro: Date

    @Column({ name: "FECHA_MODIFICACION" })
    fechaModificacion: Date

    constructor(params: IProducto = {} as IProducto) {
        this.codigo = params.codigo;
        this.es_nacional = params.es_nacional;
        this.nombre = params.nombre;
        this.precio = params.precio;
    }
}

export interface IProducto {
    codigo: string;
    es_nacional: number;
    nombre: string;
    precio: number
}