import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Department, University, HistoryStat } from "src/models/university";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DepartmentData, departmentGraphql } from "src/gql/department";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.less"]
})
export class DepartmentComponent implements OnInit, OnDestroy {
  id: string;
  department: Department;
  stats: HistoryStat[];
  private querySubscription$: Subscription;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getData();
  }

  getData() {
    this.querySubscription$ = this.apollo
      .watchQuery<DepartmentData>({
        query: departmentGraphql,
        variables: {
          id: this.id
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.department = data.department;
        this.stats = data.stats;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }
}
