import {Table, Field} from './model-metadata';

@Table({
	name: 'category',
	endpoint: '/api/accounts',
	primaryKey: 'id'
})
export class Category {

	@Field({
		serial: true,
		primaryKey: true
	})
	public id?: number = null;

	@Field({
		columnName: 'parent_category_id'
	})
	public parentCategoryId: number;

	@Field({
		columnName: 'category_name'
	})
	public name: string;
}

let foo: Category = new Category();

console.log('===');
console.log(JSON.stringify(foo));
// console.log(JSON.stringify(foo._fields));
