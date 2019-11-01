import { Component, OnInit, Input } from "@angular/core";
import { University } from "src/models/university";
import { Recommend, RecommendItem } from "src/models/recommend";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recommend-univ",
  templateUrl: "./recommend-univ.component.html",
  styleUrls: ["./recommend-univ.component.less"]
})
export class RecommendUnivComponent implements OnInit {
  @Input() univ: University;
  @Input() recommend: Recommend;
  category: number;
  recommendItem: RecommendItem;

  constructor(private route: ActivatedRoute) {
    this.category = +this.route.snapshot.paramMap.get("category");
  }

  ngOnInit() {
    this.recommendItem = this.recommend.items.find(
      item => item.university === this.univ.id
    );
  }
}
