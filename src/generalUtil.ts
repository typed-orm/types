export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

export type IsAny<T> = 0 extends 1 & T ? true : false;
export type NotAny<T> = true extends IsAny<T> ? false : true;

export type IsStringLiteral<S extends string> = string extends S ? false : true;

export type TypedAssert<This extends ToBe, ToBe> = This;
export type Assert<This, ToBe> = IsAny<This> extends true
  ? never
  : This extends ToBe
  ? This
  : never;
