import { Field, Fields, IdType } from "../../../src";
import { UserModel } from "./UserModel";

export interface PostModelFields {
  id: Field<IdType<PostModel>>;
  userId: Field<IdType<UserModel>>;
  title: Field<string>;
  content: Field<string>;
}

export interface PostModel {
  type: "model";
  name: "post";
  fields: Fields<PostModelFields>;
}
