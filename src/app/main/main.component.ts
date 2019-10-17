import { Component, OnInit, OnDestroy } from "@angular/core";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Recommend } from "src/models/recommend";

interface Data {
  readonly allRecommends: Recommend[];
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
  data: Observable<any>;

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo
      .watchQuery({ query: mainGraphql })
      .valueChanges.pipe(map(({ data }) => data));
  }
}
