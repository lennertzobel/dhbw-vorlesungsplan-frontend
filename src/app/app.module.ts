import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import {HeaderComponent} from './component/header/header.component';
import {AgendaComponent} from './component/agenda/agenda.component';
import {SettingsComponent} from './component/settings/settings.component';
import {SetupComponent} from './component/setup/setup.component';
import {HomeComponent} from './component/home/home.component';
import {
  IncludedCourseSelectorComponent
} from "./component/settings/course-selector/included-course-selector/included-course-selector.component";
import {
  ExcludedCourseSelectorComponent
} from "./component/settings/course-selector/excluded-course-selector/excluded-course-selector.component";
import {CourseSelectorComponent} from "./component/settings/course-selector/course-selector.component";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgendaComponent,
    SettingsComponent,
    SetupComponent,
    HomeComponent,
    IncludedCourseSelectorComponent,
    ExcludedCourseSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
