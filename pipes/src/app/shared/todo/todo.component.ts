import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class ToDoComponent implements OnInit {
  @Input() text;
  date = new Date();
  constructor() {}

  ngOnInit() {}
}
