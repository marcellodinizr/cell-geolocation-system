import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import Celula from "./Celula";

@Entity('images')
export default class Image {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	path: string;

	@ManyToOne(() => Celula, celula => celula.images)
	@JoinColumn({ name: 'celula_id' })
	celula: Celula;
}