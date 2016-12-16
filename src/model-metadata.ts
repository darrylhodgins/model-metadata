export interface TableMetadataInterface {
	name?: string;
	endpoint?: string;
	primaryKey?: string; // identify the field that should be "SERIAL PRIMARY KEY"
}

export interface FieldMetadataInterface {
	serial?: boolean;
	primaryKey?: boolean;
	columnName?: string; // if different from property name
}

export interface DecoratedTableInterface {
	foo?: () => void;
}

// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Function, propertyKey: string | symbol, parameterIndex: number) => void;

export function Table(config: TableMetadataInterface) {
	return (target: any) => {
		console.log('TABLE');
		console.log('...config', JSON.stringify(config));
		console.log('...target', JSON.stringify(target));

		// Save a reference to the original constructor
		let original = target;

		function construct(constructor: any, args: any) {
			let c : any = function () {
				return constructor.apply(this, args);
			};
			c.prototype = constructor.prototype;
			c.prototype.registerField = (propertyKey: string, fieldConfig: any) => {
				console.log('FOOOO', propertyKey, fieldConfig);
			};
			return new c();
		}


		// the new constructor behaviour
		let f : any = function (...args: any[]) {
			console.log('New: ' + original.name);
			return construct(original, args);
		};

		// copy prototype so intanceof operator still works
		f.prototype = original.prototype;

		// return new constructor (will override original)
		return f;
	};
}

export function Field(config: FieldMetadataInterface) {
	return (target: any, propertyKey: string) => {
		console.log('FIELD');
		console.log('...config', config);
		console.log('...target', target);
		console.log('...propertyKey', propertyKey);
		// target.registerField(propertyKey, config);
		target._fields = target._fields || [];
		target._fields.push({
			propertyKey: propertyKey,
			config: config
		});
	};
}


//
// export function Memoize(hashFunction?: (...args: any[]) => any) {
// 	return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
//
// 		if (descriptor.value != null) {
// 			descriptor.value = getNewFunction(descriptor.value, hashFunction);
// 		} else if (descriptor.get != null) {
// 			descriptor.get = getNewFunction(descriptor.get, hashFunction);
// 		} else {
// 			throw 'Only put a Memoize() decorator on a method or get accessor.';
// 		}
//
//
// 	};
// }
//
// let counter = 0;
// function getNewFunction(originalMethod: () => void, hashFunction?: (...args: any[]) => any) {
// 	const identifier = ++counter;
//
// 	// The function returned here gets called instead of originalMethod.
// 	return function (...args: any[]) {
// 		const propValName = `__memoized_value_${identifier}`;
// 		const propMapName = `__memoized_map_${identifier}`;
//
// 		let returnedValue: any;
//
// 		if (hashFunction || args.length > 0) {
//
// 			// Get or create map
// 			if (!this.hasOwnProperty(propMapName)) {
// 				Object.defineProperty(this, propMapName, {
// 					configurable: false,
// 					enumerable: false,
// 					writable: false,
// 					value: new Map<any, any>()
// 				});
// 			}
// 			let myMap: Map<any, any> = this[propMapName];
//
// 			let hashKey: any;
//
// 			if (hashFunction) {
// 				hashKey = hashFunction.apply(this, args);
// 			} else {
// 				hashKey = args[0];
// 			}
//
// 			if (myMap.has(hashKey)) {
// 				returnedValue = myMap.get(hashKey);
// 			} else {
// 				returnedValue = originalMethod.apply(this, args);
// 				myMap.set(hashKey, originalMethod.apply(this, args));
// 			}
//
// 		} else {
//
// 			if (this.hasOwnProperty(propValName)) {
// 				returnedValue = this[propValName];
// 			} else {
// 				returnedValue = originalMethod.apply(this, args);
// 				Object.defineProperty(this, propValName, {
// 					configurable: false,
// 					enumerable: false,
// 					writable: false,
// 					value: returnedValue
// 				});
// 			}
// 		}
//
// 		return returnedValue;
// 	};
// }
