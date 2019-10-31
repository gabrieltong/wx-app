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
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.less"]
})
export class SearchComponent implements OnInit, OnDestroy {
  _name = "";
  univs: University[];
  querySubscription$: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    if (this.querySubscription$) {
      this.querySubscription$.unsubscribe();
    }
  }

  ngOnInit() {
    // this.getData();
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this.getData();
  }

  getData() {
    if (this.querySubscription$) {
      this.querySubscription$.unsubscribe();
    }

    this.querySubscription$ = this.apollo
      .watchQuery<Response>({
        query: univsGraphql,
        variables: {
          filter: this.name
            ? {
                name: this.name
              }
            : null
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.univs = data.univs;
      });
  }
}
