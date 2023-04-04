import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../service/course.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {
  locations!: Map<string, string>;
  faculties!: Map<string, string>;
  years!: Map<any, string>;
  courses?: Course[];
  courseForm!: FormGroup;

  constructor(private courseService: CourseService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.locations = new Map([
      ['mos', 'Mosbach'],
      ['mgh', 'Bad Mergentheim']
    ]);

    this.faculties = new Map([
      ['t', 'Technik'],
      ['w', 'Wirtschaft']
    ]);

    this.years = new Map<string, string>();
    for (let i = 0; i != 4; i++) {
      const year = String(new Date().getFullYear() - i);
      this.years.set(year.substring(year.length - 2), year);
    }

    this.courseForm = new FormGroup({
      'queryGroup': new FormGroup({
        'location': new FormControl(null, Validators.required),
        'faculty': new FormControl(null, Validators.required),
        'year': new FormControl(null, Validators.required)
      }),
      'course': new FormControl('', Validators.required)
    });

    this.courseForm.get('queryGroup')!.valueChanges.subscribe((value) => {
      if (this.courseForm.get('queryGroup')!.valid) {
        this.courseForm.get('course')!.setValue('');
        this.courseService.findAllByLocationEqualsAndFacultyEqualsAndYearLike(value.location, value.faculty, value.year).subscribe((value) => {
          this.courses = value._embedded.courses;
        });
      }
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.authService.login(this.courseForm.get('course')!.value);
    }
  }

  unsorted(a: any, b: any) {
    return 0;
  }
}
