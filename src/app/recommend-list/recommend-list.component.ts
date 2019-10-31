import { Component, OnInit, OnDestroy } from "@angular/core";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";
import { University } from "src/models/university";
import { Recommend } from "src/models/recommend";

export interface Response {
  readonly univs: University[];
  readonly recommend: Recommend;
}

export const recommendListGraphql = gql`
  query recommendList($filter: UniversityFilter, $recommendId: ID!) {
    univs: allUniversities(filter: $filter) {
      id
      name_zh
      name_ja
      univ_type
      region
      level
      badge
    }
    recommend: Recommend(id: $recommendId) {
      id
      name
      items {
        university
        note
      }
    }
  }
`;

@Component({
  selector: "app-recommend-list",
  templateUrl: "./recommend-list.component.html",
  styleUrls: ["./recommend-list.component.less"]
})
export class RecommendListComponent implements OnInit, OnDestroy {
  querySubscription$: Subscription;

  univs: University[];
  recommend: Recommend;

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = this.route.snapshot.paramMap.get("id");
    this.querySubscription$ = this.apollo
      .watchQuery<Response>({
        query: recommendListGraphql,
        variables: {
          recommendId: id,
          filter: {
            recommend_id: id
          }
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.univs = data.univs;
        this.recommend = data.recommend;
      });
  }
}
