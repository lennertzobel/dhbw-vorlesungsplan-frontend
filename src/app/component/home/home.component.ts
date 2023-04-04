import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.courseIdObservable.subscribe(courseId => this.loggedIn = !!courseId);
  }
}
