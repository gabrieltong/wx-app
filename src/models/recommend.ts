import { BaseModel } from "./share";

export class RecommendItem extends BaseModel {
  note: string;
  university: string;
}

export class Recommend extends BaseModel {
  name: string;
  img: string;
  items?: RecommendItem[];
}
