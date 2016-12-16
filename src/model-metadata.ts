import {TableConfigInterface, FieldConfigInterface, TableMetadataInterface} from './model-metadata.interfaces';
import 'reflect-metadata';

export function Inspect(target: any): TableMetadataInterface {
	let table: any[] = Reflect.getMetadata('TableConfig', target.constructor);
	let fields: any[] = Reflect.getMetadata('FieldConfig', target.constructor);

	return {
		table: table,
		fields: fields
	};
}

export function Table(config: TableConfigInterface): ClassDecorator {
	return (target: Function) => {
		Reflect.defineMetadata('TableConfig', config, target);
	};
}

export function Field(config: FieldConfigInterface) {
	return (target: any, propertyKey: string) => {
		let existingConfig: any = [];
		if (Reflect.hasMetadata('FieldConfig', target.constructor)) {
			existingConfig = Reflect.getMetadata('FieldConfig', target.constructor);
		}
		existingConfig.push({
			propertyKey: propertyKey,
			config: config
		});
		Reflect.defineMetadata('FieldConfig', existingConfig, target.constructor);
	};
}
