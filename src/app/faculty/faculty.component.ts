import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { FacultyData, facultyGraphql } from "src/gql/faculty";
import { Professor, Faculty, Season, HistoryStat } from "src/models/university";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-faculty",
  templateUrl: "./faculty.component.html",
  styleUrls: ["./faculty.component.less"]
})
export class FacultyComponent implements OnInit, OnDestroy {
  id: string;
  faculty: Faculty;
  seasons: Season[];
  professors: Professor[];
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
      .watchQuery<FacultyData>({
        query: facultyGraphql,
        variables: {
          faculty: this.id
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.faculty = data.faculty;
        this.professors = data.professors;
        this.seasons = data.seasons;
        this.stats = data.stats;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }
}
