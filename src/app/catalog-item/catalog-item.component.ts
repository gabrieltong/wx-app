import { Component, OnInit, Input } from "@angular/core";
import { University } from "src/models/university";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.less"]
})
export class CatalogItemComponent implements OnInit {
  category: number;
  @Input() univ: University;
  constructor(private route: ActivatedRoute) {
    this.category = +this.route.snapshot.paramMap.get("category");
  }

  ngOnInit() {}
}
