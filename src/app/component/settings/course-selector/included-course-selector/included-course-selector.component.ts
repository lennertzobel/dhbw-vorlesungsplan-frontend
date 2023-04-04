import {Component} from '@angular/core';
import {CourseSelectorComponent} from "../course-selector.component";
import {AuthService} from "../../../../service/auth.service";
import {CourseService} from "../../../../service/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-included-course-selector',
  templateUrl: '../course-selector.component.html'
})
export class IncludedCourseSelectorComponent extends CourseSelectorComponent {
  title = 'Kurs einschließen';

  constructor(authService: AuthService, courseService: CourseService, router: Router) {
    super(authService, courseService, router);
  }

  onAddId(id: string): void {
    this.authService.addIncludedId(id);
    this.onNavigateToSettings();
  }
}
