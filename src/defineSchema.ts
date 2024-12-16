import { BuiltinTypes, ModelDefinition, TypeDefinition } from "./baseTypes";
import { GetTypeInfoFromTypeDefinition } from "./util";

export type Fields<T> = {
  [FieldName in keyof T]: {
    [K in "fieldName" | keyof T[FieldName]]: K extends keyof T[FieldName]
      ? T[FieldName][K]
      : FieldName;
  };
};

export type Field<
  Type extends TypeDefinition | BuiltinTypes,
  IsOptional extends boolean = false
> = {
  type: GetTypeInfoFromTypeDefinition<Type>;
  isOptional: IsOptional;
};

export type OptionalField<Type extends TypeDefinition> = Field<Type, true>;

export type IdType<Model extends ModelDefinition> = {
  type: "id";
  modelName: Model["name"];
};
