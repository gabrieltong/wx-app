import gql from "graphql-tag";
import { SearchMeta } from "src/models/university";

export const searchMetaGraphql = gql`
  query searchMeta {
    searchMeta: searchMeta {
      wen0
      li0
      wen1
      li1
      region
      univ_type
    }
  }
`;

export interface SearchMetaData {
  readonly searchMeta: SearchMeta;
}
