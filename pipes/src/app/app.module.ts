import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeekComponent } from "./week/week.component";
import { CapitalizeFirstPipe } from "./shared/capitalize-first.pipe";

@NgModule({
  declarations: [AppComponent, WeekComponent, CapitalizeFirstPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
