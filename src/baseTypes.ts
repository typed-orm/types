export interface ModelDefinition {
  type: "model";
  name: string;
  fields: Record<string, FieldDefinition>;
}

export type PrimitiveType =
  | {
      type: "id";
      modelName: string;
    }
  | { type: "string" | "number" | "boolean" | "bigint" };

export type TypeDefinition = ModelDefinition | PrimitiveType;

export type BuiltinTypes = string | number | boolean | bigint;

export type TypeInfo =
  | {
      type: "id";
      modelName: string;
    }
  | {
      type: "custom";
      typeName: string;
    }
  | { type: "string" | "number" | "boolean" | "bigint" };

export interface FieldDefinition {
  fieldName: string;
  type: TypeInfo;
}
