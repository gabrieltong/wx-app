import gql from "graphql-tag";
import { Department, HistoryStat } from "src/models/university";

export interface DepartmentData {
  readonly department: Department;
  readonly stats: HistoryStat[];
}

export const departmentGraphql = gql`
  query gettDepartmentDetail($id: ID!) {
    department: Department(id: $id) {
      id
      name
      faculties {
        id
        name
        major
        wen_or_li
      }
    }
    stats: allHistoryStats(
      filter: { department: $id }
      perPage: 100
      sortField: "year"
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
