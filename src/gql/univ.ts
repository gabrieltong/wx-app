import { University } from "src/models/university";
import gql from "graphql-tag";

export interface UnivData {
  readonly university: University;
}

export const univGraphql = gql`
  query univ($id: ID!) {
    university: University(id: $id) {
      id
      name_zh
      name_ja
      region
      level
      badge
      departments {
        id
        name
        faculties {
          id
          name
          major
        }
      }
    }
  }
`;
