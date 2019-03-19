import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeekComponent } from "./week/week.component";
import { CapitalizeFirstPipe } from "./shared/capitalize-first.pipe";
import { NumberWeekPipe } from "./shared/number-week.pipe";
import { ToDoComponent } from "./shared/todo/todo.component";
import { TrimPipe } from "./shared/pipeTrim/trim.pipe";

@NgModule({
  declarations: [AppComponent, WeekComponent, CapitalizeFirstPipe, NumberWeekPipe,ToDoComponent, TrimPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
