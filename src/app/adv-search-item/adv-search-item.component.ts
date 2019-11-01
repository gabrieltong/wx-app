import { Component, OnInit, Input } from "@angular/core";
import { Faculty } from "src/models/university";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-adv-search-item",
  templateUrl: "./adv-search-item.component.html",
  styleUrls: ["./adv-search-item.component.less"]
})
export class AdvSearchItemComponent implements OnInit {
  @Input() faculty: Faculty;
  category: number;

  constructor(private route: ActivatedRoute) {
    this.category = +this.route.snapshot.paramMap.get("category");
  }

  ngOnInit() {}
}
