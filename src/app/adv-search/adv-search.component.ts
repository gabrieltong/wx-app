import { Component, OnInit } from "@angular/core";
import { University, SearchMeta, SearchFilter } from "src/models/university";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";

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
  searchFilter: SearchFilter;
  searchMeta: SearchMeta;
  searchMetaSubscription$: Subscription;
  querySubscription$: Subscription;
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.searchFilter = new SearchFilter();
    this.searchFilter.category = +this.route.snapshot.paramMap.get("category");

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

  selectRegion(region: string) {
    if (region === "全部") {
      this.searchFilter.region_in = [];
      return;
    }
    if (this.searchFilter.region_in.includes(region)) {
      this.searchFilter.region_in.splice(
        this.searchFilter.region_in.indexOf(region),
        1
      );
    } else {
      this.searchFilter.region_in.push(region);
    }
    console.log("this.searchFilter.region_in", this.searchFilter.region_in);
  }

  selectUnivType(univ_type: string) {
    if (univ_type === "全部") {
      this.searchFilter.univ_type_in = [];
      return;
    }
    if (this.searchFilter.univ_type_in.includes(univ_type)) {
      this.searchFilter.univ_type_in.splice(
        this.searchFilter.univ_type_in.indexOf(univ_type),
        1
      );
    } else {
      this.searchFilter.univ_type_in.push(univ_type);
    }
    console.log(
      "this.searchFilter.univ_type_in",
      this.searchFilter.univ_type_in
    );
  }
  search() {}
}
