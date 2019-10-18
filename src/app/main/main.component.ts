import { Component, OnInit, OnDestroy } from "@angular/core";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { Observable, Subscription } from "rxjs";
import { Recommend } from "src/models/recommend";
import { University } from "src/models/university";

interface Response {
  readonly allRecommends: Recommend[];
  readonly hostUniversities: University[];
  readonly rankUniversities: University[];
}

export const mainGraphql = gql`
  query {
    allRecommends(perPage: 4, page: 0) {
      id
      name
      img
    }

    hostUniversities: allUniversities(perPage: 8) {
      id
      name_zh
      name_ja
      badge
    }

    rankUniversities: allUniversities(
      perPage: 8
      sortField: "univ_type_rank"
      sortOrder: "DESC"
    ) {
      id
      name_zh
      name_ja
      badge
    }
    allRecommends(perPage: 4, page: 0) {
      id
      name
      img
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
  allRecommends: Recommend[];
  hostUniversities: University[];
  rankUniversities: University[];

  private querySubscription: Subscription;

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<Response>({
        query: mainGraphql
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.allRecommends = data.allRecommends;
        this.hostUniversities = data.hostUniversities;
        this.rankUniversities = data.rankUniversities;
      });
  }
}
