import { Component, OnInit, Input } from "@angular/core";
import { University } from "src/models/university";

@Component({
  selector: "app-search-item",
  templateUrl: "./search-item.component.html",
  styleUrls: ["./search-item.component.less"]
})
export class SearchItemComponent implements OnInit {
  @Input() univ: University;
  constructor() {}

  ngOnInit() {}
}
