import { Component, OnInit } from "@angular/core";
import {
  University,
  SearchMeta,
  SearchFilter,
  Faculty
} from "src/models/university";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";
import { searchMetaGraphql, SearchMetaData } from "src/gql/search_meta";
import { SearchGql, SearchData } from "src/gql/search";

@Component({
  selector: "app-adv-search",
  templateUrl: "./adv-search.component.html",
  styleUrls: ["./adv-search.component.less"]
})
export class AdvSearchComponent implements OnInit {
  page = 0;
  perPage = 5;
  showEnglishFilter = false;
  searched = false;
  faculties: Faculty[];
  searchFilter: SearchFilter;
  searchMeta: SearchMeta;
  searchMetaSubscription$: Subscription;
  querySubscription$: Subscription;
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.faculties = [];
    this.searchFilter = new SearchFilter();
    this.searchFilter.category = +this.route.snapshot.paramMap.get("category");

    this.getSearchMeta();
  }

  reset() {
    this.searchFilter = new SearchFilter();
  }

  search() {
    this.searched = true;
    if (this.querySubscription$) {
      this.querySubscription$.unsubscribe();
    }

    this.querySubscription$ = this.apollo
      .watchQuery<SearchData>({
        query: SearchGql,
        variables: {
          filter: this.searchFilter,
          page: this.page,
          perPage: this.perPage
        }
      })
      .valueChanges.subscribe(({ data }) => {
        data.search.forEach(faculty => {
          if (!this.faculties.find(f => f.id === faculty.id)) {
            this.faculties.push(faculty);
          }
        });
      });
  }

  get majors(): string[] {
    if (this.searchFilter.category === 0) {
      if (this.searchFilter.wen_or_li === 0) {
        return this.searchMeta.wen0;
      } else {
        return this.searchMeta.li0;
      }
    } else {
      if (this.searchFilter.wen_or_li === 0) {
        return this.searchMeta.wen1;
      } else {
        return this.searchMeta.li1;
      }
    }
  }

  getSearchMeta() {
    this.searchMetaSubscription$ = this.apollo
      .watchQuery<SearchMetaData>({
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
}
