import { Field, Fields, IdType } from "../../../src";

export interface UserModelFields {
  id: Field<IdType<UserModel>>;
  nickname: Field<string>;
}

export interface UserModel {
  type: "model";
  name: "user";
  fields: Fields<UserModelFields>;
}
