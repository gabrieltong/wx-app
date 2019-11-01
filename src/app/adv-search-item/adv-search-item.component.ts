import { Component, OnInit, Input } from "@angular/core";
import { Faculty } from "src/models/university";

@Component({
  selector: "app-adv-search-item",
  templateUrl: "./adv-search-item.component.html",
  styleUrls: ["./adv-search-item.component.less"]
})
export class AdvSearchItemComponent implements OnInit {
  @Input() faculty: Faculty;
  constructor() {}

  ngOnInit() {}
}
