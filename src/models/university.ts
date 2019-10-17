import { BaseModel } from "./share";

export class University extends BaseModel {
  name_zh: string;
  name_ja: string;
  univ_type: string;
  region: string;
  level: String;
  rank: Number;
  univ_type_rank: Number;
  badge: String;
}
