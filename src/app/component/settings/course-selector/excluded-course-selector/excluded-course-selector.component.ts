import {Component, OnInit} from '@angular/core';
import {CourseSelectorComponent} from "../course-selector.component";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../../service/course.service";

@Component({
  selector: 'app-excluded-course-selector',
  templateUrl: '../course-selector.component.html'
})
export class ExcludedCourseSelectorComponent extends CourseSelectorComponent {
  title = 'Kurs ausschließen';

  constructor(authService: AuthService, courseService: CourseService, router: Router) {
    super(authService, courseService, router);
  }

  onAddId(id: string): void {
    this.authService.addExcludedId(id);
    this.onNavigateToSettings();
  }
}
