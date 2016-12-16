import {Table, Field, Inspect} from './model-metadata';
import {TableMetadataInterface} from './model-metadata.interfaces';
import 'reflect-metadata';

const TABLE_DECORATIONS = {
	name: 'decoratedTable',
	endpoint: '/api/deco',
	primaryKey: 'id'
};

const FIELD_1_DECORATIONS = {
	columnName: 'decorated_field_one'
};

const FIELD_2_DECORATIONS = {
	columnName: 'decorated_field_two'
};

@Table(TABLE_DECORATIONS)
class DecoratedTable {

	@Field(FIELD_1_DECORATIONS)
	public DecoratedField1: string = '';

	@Field(FIELD_2_DECORATIONS)
	public DecoratedField2: number = 1;

	public UnDecoratedField: string;
}

describe('Table decorator', () => {
	describe('when decorating a class', () => {

		let foo = new DecoratedTable();
		let metadata: TableMetadataInterface = Inspect(foo);
		console.log('metadata', metadata);

		it('should make the configuration data for the table available', () => {
			expect(metadata.table).toEqual(TABLE_DECORATIONS);
		});
	});
});

describe('Field decorator', () => {
	describe('decorating a field', () => {
		let foo = new DecoratedTable();
		let metadata: TableMetadataInterface = Inspect(foo);
		console.log('metadata', metadata);

		it('should make the configuration data for the field available', () => {
			expect(metadata.fields).toEqual(
				[
					{
						propertyKey: 'DecoratedField1',
						config: FIELD_1_DECORATIONS
					},
					{
						propertyKey: 'DecoratedField2',
						config: FIELD_2_DECORATIONS
					}
				]
			);
		});
	});
});
