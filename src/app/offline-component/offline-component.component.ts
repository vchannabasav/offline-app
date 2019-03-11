import { Component, OnInit } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

declare var Offline: any;

@Component({
  selector: "offline-component",
  templateUrl: "./offline-component.component.html",
  styleUrls: ["./offline-component.component.css"]
})
export class OfflineComponentComponent implements OnInit {
  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log("updates");
      const c = confirm(
        "Updates are available, do you want to update an application ?"
      );
      console.log("c value", c);
      if (c === true) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  ngOnInit() {
    Offline.options = {
      checkOnLoad: true
    };
    Offline.on("up", () => {
      document.location.reload();
    });
  }
}
