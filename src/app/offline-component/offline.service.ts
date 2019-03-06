import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OfflineService {
  constructor(private http: HttpClient) {}
}
