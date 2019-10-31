import { Component, OnInit } from "@angular/core";
import { University, SearchMeta } from "src/models/university";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";

interface Response {
  readonly searchMeta: SearchMeta;
}

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

@Component({
  selector: "app-adv-search",
  templateUrl: "./adv-search.component.html",
  styleUrls: ["./adv-search.component.less"]
})
export class AdvSearchComponent implements OnInit {
  searchMeta: SearchMeta;
  searchMetaSubscription$: Subscription;
  querySubscription$: Subscription;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getSearchMeta();
  }

  getSearchMeta() {
    this.searchMetaSubscription$ = this.apollo
      .watchQuery<Response>({
        query: searchMetaGraphql
      })
      .valueChanges.subscribe(({ data }) => {
        this.searchMeta = data.searchMeta;
      });
  }

  search() {}
}
