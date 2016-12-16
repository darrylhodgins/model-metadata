// public jsonToInsertKeys (data: CategoryJsonInterface): KeyAndValueListInterface {
// 	return {
// 		keys: [
// 			'category_name',
// 			'parent_category_id'
// 		],
// 		values: [
// 			data.name,
// 			data.parentCategoryId
// 		]
// 	};
// }
//
// public dataToJson (data: CategoryDataInterface): CategoryJsonInterface {
// 	return {
// 		id: data.id,
// 		name: data.category_name,
// 		parentCategoryId: data.parent_category_id
// 	} as CategoryJsonInterface;
// }
//
// public jsonToData (data: CategoryJsonInterface): CategoryDataInterface {
// 	return {
// 		id: data.id,
// 		category_name: data.name,
// 		parent_category_id: data.parentCategoryId
// 	} as CategoryDataInterface;
// }
//
//
//
// constructor() {
// }
//
// public static loadJson(data: CategoryJsonInterface): Category {
// 	let category: Category = new Category();
// 	category.id = data.id;
// 	category.name = data.name;
// 	category.parentCategoryId = data.parentCategoryId;
// 	return category;
// }
//
// public toJson(): CategoryJsonInterface {
// 	return {
// 		id: this.id,
// 		name: this.name,
// 		parentCategoryId: this.parentCategoryId
// 	};
// }
