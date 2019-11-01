import { Component, OnInit, Input } from "@angular/core";
import { University } from "src/models/university";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.less"]
})
export class SearchItemComponent implements OnInit {
  category: number;
  @Input() univ: University;
  constructor(private route: ActivatedRoute) {
    this.category = +this.route.snapshot.paramMap.get("category");
  }

  ngOnInit() {}
}
