import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import gql from "graphql-tag";
import { University } from "src/models/university";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";

export interface Response {
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

@Component({
  selector: "app-univ-detail",
  templateUrl: "./univ-detail.component.html",
  styleUrls: ["./univ-detail.component.less"]
})
export class UnivDetailComponent implements OnInit, OnDestroy {
  loading: boolean;
  private querySubscription$: Subscription;
  university: University;

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.querySubscription$ = this.apollo
      .watchQuery<Response>({
        query: univGraphql,
        variables: {
          id
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.university = data.university;
      });
  }
}
