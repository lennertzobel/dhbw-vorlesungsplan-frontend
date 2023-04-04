import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/course.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  course?: Course;
  includedCourses?: Course[];
  excludedCourses?: Course[];
  apiUrl = environment.apiUrl;

  constructor(private authService: AuthService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.findById(this.authService.courseId!).subscribe(course => this.course = course);

    this.authService.includedIdsObservable.subscribe(includedIds => {
      if (includedIds) {
        this.courseService.findByIdIn(includedIds).subscribe(response => this.includedCourses = response._embedded.courses);
      }
    });

    this.authService.excludedIdsObservable.subscribe(excludedIds => {
      if (excludedIds) {
        this.courseService.findByIdIn(excludedIds).subscribe(response => this.excludedCourses = response._embedded.courses);
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onDeleteIncludedId(courseId: string) {
    this.authService.deleteIncludedId(courseId);
  }

  onDeleteExcludedId(courseId: string) {
    this.authService.deleteExcludedId(courseId);
  }
}
