import { Component, OnInit, OnDestroy } from "@angular/core";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import { Recommend } from "src/models/recommend";
import { University } from "src/models/university";

interface Response {
  readonly recommends: Recommend[];
  readonly hots: University[];
}

export const mainGraphql = gql`
  query {
    recommends: allRecommends(sortOrder: "DESC", perPage: 4) {
      id
      name
      img
    }
    hots: allUniversities(perPage: 8) {
      id
      name_zh
      name_ja
      badge
    }
  }
`;

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.less"]
})
export class MainComponent implements OnInit, OnDestroy {
  loading: boolean;
  recommends: Recommend[];
  hots: University[];

  private querySubscription$: Subscription;

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription$ = this.apollo
      .watchQuery<Response>({
        query: mainGraphql
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.recommends = data.recommends;
        this.hots = data.hots;
      });
  }
}
