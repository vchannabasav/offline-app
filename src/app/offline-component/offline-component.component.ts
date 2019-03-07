import { Component, OnInit } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

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
  constructor(private updates: SwUpdate) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {}
}
