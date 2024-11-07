import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCelulas1730976833500 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'celulas',
			columns: [
				{
					name: 'id',
					type: 'integer',
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'name',
					type: 'varchar',
				},
				{
					name: 'latitude',
					type: 'decimal',
					scale: 10,
					precision: 2,
				},
				{
					name: 'longitude',
					type: 'decimal',
					scale: 10,
					precision: 2,
				},
				{
					name: 'about',
					type: 'text',
				},
				{
					name: 'week_day',
					type: 'varchar',
				},
				{
					name: 'time_of_day',
					type: 'varchar',
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('celulas');
	}

}
