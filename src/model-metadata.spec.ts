import {TableMetadataInterface, FieldMetadataInterface, Table, Field} from './model-metadata';

@Table({
	name: 'category',
	endpoint: '/api/accounts',
	primaryKey: 'id'
})
class DecoratedTable {
}

describe('Table decorator', () => {
	describe('when decorating a class', () => {
		it('should make available a thing called \'_fields\'', () => {
			let foo = new DecoratedTable();
			console.log(foo);
			expect(foo).toEqual('bar');
		});
	});

});
describe('Field decorator', () => {
	it('should foo', () => {
		expect('foo').toEqual('bar');
	});
});
