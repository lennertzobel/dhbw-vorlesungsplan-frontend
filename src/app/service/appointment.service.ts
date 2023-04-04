import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) { }

  find(includedIds: string[], excludedIds: string[]) {
    const params = new HttpParams()
      .set('includedIds', includedIds.join(','))
      .set('excludedIds', excludedIds.join(','))
      .set('instant', new Date().toUTCString())
      .set('sort', 'start')
      .set('page', 0)
      .set('projection', 'appointment-single');

    return this.httpClient.get<any>(
      `${environment.apiUrl}/appointments/search/findDistinctByIncludedCoursesIdWithoutExcludedCoursesIdAndEndGreaterThanEqual`,
      {params: params}
    );
  }
}
