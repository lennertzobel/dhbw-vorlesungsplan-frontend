import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.courseIdObservable.subscribe(courseId => this.loggedIn = !!courseId);
  }
}
