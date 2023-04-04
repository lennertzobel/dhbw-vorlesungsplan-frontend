import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Course} from "../model/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private httpClient: HttpClient) {
  }

  findByIdIn(ids: string[]) {
    const params = new HttpParams()
      .set('uuids', ids.join(','));

    return this.httpClient.get<any>(
      `${environment.apiUrl}/courses/search/findByIdIn`,
      {params: params}
    );
  }

  findById(id: string) {
    return this.httpClient.get<Course>(
      `${environment.apiUrl}/courses/${id}`
    );
  }

  findSimilarById(id: string) {
    const params = new HttpParams()
      .set('uuid', id);

    return this.httpClient.get<any>(
      `${environment.apiUrl}/courses/search/findSimilarById`,
      {params: params}
    );
  }

  findAllByLocationEqualsAndFacultyEqualsAndYearLike(location: string, faculty: string, year: string) {
    const params = new HttpParams()
      .set('location', location)
      .set('faculty', faculty)
      .set('year', year)
      .set('sort', 'name');

    return this.httpClient.get<any>(
      `${environment.apiUrl}/courses/search/findAllByLocationEqualsAndFacultyEqualsAndYearLike`,
      {params: params}
    );
  }
}
