import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CourseService} from "./course.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private courseIdSubject: BehaviorSubject<string | null>;
  courseIdObservable: Observable<string | null>;

  private includedIdsSubject: BehaviorSubject<string[] | null>;
  includedIdsObservable: Observable<string[] | null>;

  private excludedIdsSubject: BehaviorSubject<string[] | null>;
  excludedIdsObservable: Observable<string[] | null>;

  constructor(private courseService: CourseService, private router: Router) {
    this.courseIdSubject = new BehaviorSubject<string | null>(null);
    this.courseIdObservable = this.courseIdSubject.asObservable();

    this.includedIdsSubject = new BehaviorSubject<string[] | null>(null);
    this.includedIdsObservable = this.includedIdsSubject.asObservable();

    this.excludedIdsSubject = new BehaviorSubject<string[] | null>(null);
    this.excludedIdsObservable = this.excludedIdsSubject.asObservable();

    this.autoLogin();
  }

  get courseId() {
    return this.courseIdSubject.value;
  }

  get includedIds() {
    return this.includedIdsSubject.value;
  }

  get excludedIds() {
    return this.excludedIdsSubject.value;
  }

  addIncludedId(courseId: string) {
    this.addId(courseId,'includedIds');
  }

  deleteIncludedId(courseId: string) {
    this.deleteId(courseId,'includedIds');
  }

  addExcludedId(courseId: string) {
    this.addId(courseId,'excludedIds');
  }

  deleteExcludedId(courseId: string) {
    this.deleteId(courseId,'excludedIds');
  }

  private addId(courseId: string, localStorageKey: string) {
    const ids = new Set<string>(JSON.parse(localStorage.getItem(localStorageKey)!));
    ids.add(courseId);
    localStorage.setItem(localStorageKey, JSON.stringify(Array.from(ids)));
    this.includedIdsSubject.next(JSON.parse(localStorage.getItem('includedIds')!));
    this.excludedIdsSubject.next(JSON.parse(localStorage.getItem('excludedIds')!));
  }

  private deleteId(courseId: string, localStorageKey: string) {
    const ids = new Set<string>(JSON.parse(localStorage.getItem(localStorageKey)!));
    ids.delete(courseId);
    localStorage.setItem(localStorageKey, JSON.stringify(Array.from(ids)));
    this.includedIdsSubject.next(JSON.parse(localStorage.getItem('includedIds')!));
    this.excludedIdsSubject.next(JSON.parse(localStorage.getItem('excludedIds')!));
  }

  login(courseId: string) {
    localStorage.setItem('course', courseId);

    this.autoLogin();
  }

  logout() {
    localStorage.clear();

    this.courseIdSubject.next(null);

    this.router.navigate(['']);
  }

  private autoLogin() {
    const courseId = localStorage.getItem('course')!;

    if (courseId) {
      this.courseIdSubject.next(courseId);

      this.includedIdsSubject.next(JSON.parse(localStorage.getItem('includedIds')!));

      this.excludedIdsSubject.next(JSON.parse(localStorage.getItem('excludedIds')!));
    }
  }
}
