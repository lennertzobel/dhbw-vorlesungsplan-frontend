import {Directive, Injectable, OnInit} from '@angular/core';
import {Course} from "../../../model/course.model";
import {CourseService} from "../../../service/course.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Directive()
export abstract class CourseSelectorComponent implements OnInit {

  similarCourses?: Course[];

  protected constructor(protected authService: AuthService, private courseService: CourseService, private router: Router) {
  }

  ngOnInit(): void {
    const courseId = this.authService.courseId!;

    this.courseService.findSimilarById(courseId).subscribe(response => this.similarCourses = response._embedded.courses)
  }

  onNavigateToSettings() {
    this.router.navigate(['settings']);
  }

  abstract onAddId(id: string): void;
}
