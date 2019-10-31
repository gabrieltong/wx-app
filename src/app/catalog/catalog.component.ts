import { Component, OnInit, OnDestroy } from "@angular/core";
import { University } from "src/models/university";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";

export interface Response {
  readonly univs: University[];
}

export const univsGraphql = gql`
  query($filter: UniversityFilter) {
    univs: allUniversities(filter: $filter) {
      id
      name_zh
      name_ja
      univ_type
      region
      level
      badge
    }
  }
`;

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.less"]
})
export class CatalogComponent implements OnInit, OnDestroy {
  univs: University[];
  querySubscription$: Subscription;

  _level: string = null;
  levels = ["S", "A", "B", "C", "D"];

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  ngOnInit() {
    this.getData();
  }

  set level(level: string) {
    this._level = level;
    this.getData();
  }

  get level(): string {
    return this._level;
  }

  getData() {
    if (this.querySubscription$) {
      this.querySubscription$.unsubscribe();
    }

    this.querySubscription$ = this.apollo
      .watchQuery<Response>({
        query: univsGraphql,
        variables: {
          filter: this.level
            ? {
                level: this.level
              }
            : null
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.univs = data.univs;
      });
  }
}
