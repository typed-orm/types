import { BuiltinTypes, TypeDefinition, TypeInfo } from "./baseTypes";
import { Assert, Equal } from "./generalUtil";

export type GetModelFromSchema<
  Schema,
  ModelName extends string
> = Schema extends Record<"model", Record<ModelName, infer I>> ? I : never;

export type GetTypeInfoFromTypeDefinition<
  Type extends TypeDefinition | BuiltinTypes
> = Assert<
  Type extends { type: "model"; name: infer I extends string }
    ? { type: "custom"; custom: I }
    : Type extends { type: "id"; modelName: infer I extends string }
    ? { type: "id"; modelName: I }
    : Equal<string, Type> extends true
    ? { type: "string" }
    : Equal<number, Type> extends true
    ? { type: "number" }
    : Equal<boolean, Type> extends true
    ? { type: "boolean" }
    : Equal<bigint, Type> extends true
    ? { type: "bigint" }
    : never,
  TypeInfo
>;
