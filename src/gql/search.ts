import gql from "graphql-tag";
import { Faculty } from "src/models/university";

export interface SearchData {
  search: Faculty[];
}

export const SearchGql = gql`
  query(
    $page: Int
    $perPage: Int
    $sortField: String
    $sortOrder: String
    $filter: SearchFilter!
  ) {
    search(
      filter: $filter
      perPage: $perPage
      page: $page
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      name
      department {
        university {
          id
          name_zh
          univ_type
          region
          level
        }
        id
        name
        faculties {
          id
          name
        }
      }
    }
  }
`;
