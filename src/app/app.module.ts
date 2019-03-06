import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OfflineComponentComponent } from "./offline-component/offline-component.component";
import { AgGridModule } from "ag-grid-angular";
import { OfflineService } from "./offline-component/offline.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, OfflineComponentComponent],
  imports: [BrowserModule, AgGridModule.withComponents([]), HttpClientModule],
  providers: [OfflineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
