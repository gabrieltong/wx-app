import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-single-option",
  templateUrl: "./single-option.component.html",
  styleUrls: ["./single-option.component.less"]
})
export class SingleOptionComponent implements OnInit {
  @Input() selected: number;
  @Input() options: Array<{ name: string; value: number }>;
  @Output() ee: EventEmitter<number>;

  constructor() {
    this.ee = new EventEmitter<number>();
    if (!this.options) {
      this.options = [
        { name: "不限", value: 2 },
        { name: "无", value: 0 },
        { name: "必须", value: 1 }
      ];
    }
  }

  ngOnInit() {}
}
