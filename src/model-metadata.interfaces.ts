export interface TableConfigInterface {
	name?: string;
	endpoint?: string;
	primaryKey?: string; // identify the field that should be "SERIAL PRIMARY KEY"
}

export interface FieldConfigInterface {
	columnName?: string; // if different from property name
}

export interface FieldMetadataInterface {
	propertyKey: string;
	config: FieldConfigInterface;
}

export interface TableMetadataInterface {
	table: TableConfigInterface;
	fields: FieldMetadataInterface[];
}
