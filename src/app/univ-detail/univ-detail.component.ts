import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import gql from "graphql-tag";
import { University } from "src/models/university";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { UnivData, univGraphql } from "src/gql/univ";

@Component({
  selector: "app-univ-detail",
  templateUrl: "./univ-detail.component.html",
  styleUrls: ["./univ-detail.component.less"]
})
export class UnivDetailComponent implements OnInit, OnDestroy {
  id: string;
  category: number;
  loading: boolean;
  private querySubscription$: Subscription;
  university: University;

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.category = +this.route.snapshot.paramMap.get("category");
    this.getData();
  }

  getData() {
    this.querySubscription$ = this.apollo
      .watchQuery<UnivData>({
        query: univGraphql,
        variables: {
          id: this.id
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.university = data.university;
      });
  }
}
