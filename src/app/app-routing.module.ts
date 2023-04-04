import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./component/settings/settings.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {HomeComponent} from "./component/home/home.component";
import {
  IncludedCourseSelectorComponent
} from "./component/settings/course-selector/included-course-selector/included-course-selector.component";
import {
  ExcludedCourseSelectorComponent
} from "./component/settings/course-selector/excluded-course-selector/excluded-course-selector.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', canActivate: [AuthGuardService], component: SettingsComponent},
  {path: 'settings/includes', canActivate: [AuthGuardService], component: IncludedCourseSelectorComponent},
  {path: 'settings/excludes', canActivate: [AuthGuardService], component: ExcludedCourseSelectorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
