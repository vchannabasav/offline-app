import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OfflineComponentComponent } from "./offline-component/offline-component.component";
import { AgGridModule } from "ag-grid-angular";
import { OfflineService } from "./offline-component/offline.service";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, OfflineComponentComponent],
  imports: [BrowserModule, AgGridModule.withComponents([]), HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [OfflineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
