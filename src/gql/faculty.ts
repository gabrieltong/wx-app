import gql from "graphql-tag";
import { Faculty, HistoryStat, Professor, Season } from "src/models/university";

export interface FacultyData {
  readonly faculty: Faculty;
  readonly stats: HistoryStat[];
  readonly professors: Professor[];
  readonly seasons: Season[];
}

export const facultyGraphql = gql`
  query getSubjectInfo($faculty: ID!) {
    faculty: Faculty(id: $faculty) {
      id
      name
      major
      department {
        id
        name
        category
        university {
          id
          name_zh
        }
      }
    }
    seasons: allSeasons(filter: { faculty: $faculty }) {
      id
      apply_no
      is_ja
      eju_ja
      jlpt
      eju_season
      is_english
      is_toefl
      is_toeic
      is_xiaonei_en
      toefl_base_score
      toeic_base_score
      is_xiaonei
      is_interview
      is_three_univ
      is_eju
      is_eju_ja
      is_eju_wen_math
      is_eju_li_math
      is_eju_wen
      is_eju_physics
      is_eju_chemistry
      is_eju_biology
      online_apply_start
      online_apply_end
      apply_start
      apply_end
      doc_result_date
      xiaonei_date
      xiaonei_result_date
      xiaonei_contents
      interview_date
      final_result_date
      pdf
      apply_type
    }
    professors: allProfessors(filter: { faculty: $faculty }) {
      id
      name
      research_fields {
        major
        children {
          content
          major
        }
      }
    }
    stats: allHistoryStats(
      filter: { faculty: $faculty }
      perPage: 10
      sortField: "id"
      sortOrder: "DESC"
    ) {
      id
      year
      eju_ja
      eju_math
      eju_wen
      eju_physics
      eju_chemistry
      eju_biology
      apply_num
      pass_num
    }
  }
`;
