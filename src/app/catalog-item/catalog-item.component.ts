import { Component, OnInit, Input } from "@angular/core";
import { University } from "src/models/university";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.less"]
})
export class CatalogItemComponent implements OnInit {
  @Input() univ: University;
  constructor() {}

  ngOnInit() {}
}
