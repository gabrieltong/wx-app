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
  departments: Department[];
}

export class Department extends BaseModel {
  name: string;
  category: number;
  university: University;
  faculties: Faculty[];
}

export class Faculty extends BaseModel {
  name: string;
  major: string;
}

export class Professor extends BaseModel {
  name: string;
  level: string;
  research_field: [
    { major: string; children: [{ major: string; content: string }] }
  ];
}

export class Major extends BaseModel {
  name: string;
  wen_or_li: number;
  level: number;
}

export class Season extends BaseModel {
  faculty: Faculty;
  apply_type: string;
  apply_no: number;
  eju_season: number;

  /* -------------------0: 不需要, 1: 需要, 2: 任意 --------------------------*/

  /* eju仅学部有 */
  is_eju: number;
  is_eju_ja: number;
  is_eju_wen_math: number;
  is_eju_li_math: number;
  is_eju_wen: number;
  is_eju_physics: number;
  is_eju_chemistry: number;
  is_eju_biology: number;

  /* 日语仅大学院有 */
  is_ja: number;
  eju_ja: Number;
  jlpt: string;

  is_english: number;
  is_toefl: number;
  toefl_deadline_start: Date;
  toefl_deadline_end: Date;
  toefl_base_score: number;
  toefl_best_score: number;
  toefl_note: String;
  is_toeic: number;
  toeic_deadline_start: Date;
  toeic_deadline_end: Date;
  toeic_base_score: number;
  toeic_best_score: number;
  toeic_note: string;
  is_xiaonei_en: number;

  is_three_univ: number;
  is_xiaonei: number;
  xiaonei_contents: String;
  is_interview: number;

  online_apply_start: Date;
  online_apply_end: Date;
  apply_start: Date;
  apply_end: Date;
  doc_result_date: Date;
  xiaonei_date: Date;
  xiaonei_result_date: Date;
  interview_date: Date;
  final_result_date: Date;
}

export class HistoryStat extends BaseModel {
  department?: Department;
  faculty: Faculty; //学科
  year?: number; //【年份】
  eju_ja?: number; //【EJU日语平均分】
  eju_math?: number; //【EJU数学平均分】
  eju_wen?: number; //【EJU文综平均分】
  eju_physics?: number; //【EJU物理平均分】
  eju_chemistry?: number; //【EJU化学平均分】
  eju_biology?: number; //【EJU生物平均分】
  apply_num?: number; //【报考人数】
  pass_num?: number; //【合格人数】
}
