import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import Image from "./Image";

@Entity('celulas')
export default class Celula {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	name: string;

	@Column()
	latitude: number;

	@Column()
	longitude: number;

	@Column()
	nucleus: string;

	@Column()
	network: string;

	@Column()
	week_day: string;

	@Column()
	time_of_day: string;

	@OneToMany(() => Image, image => image.celula, {
		cascade: ['insert', 'update']  // When you create or update a cell, it will automatically create or update the images
	})
	@JoinColumn({ name: 'celula_id' })
	images: Image[];
}