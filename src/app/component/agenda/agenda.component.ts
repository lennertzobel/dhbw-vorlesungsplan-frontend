import {Component, OnInit} from '@angular/core';
import * as _ from "lodash";
import {AuthService} from "../../service/auth.service";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html'
})
export class AgendaComponent implements OnInit {
  appointmentGroups: any;

  ngOnInit() {
    const includedIds = ([] as any[]).concat(this.authService.courseId!, this.authService.includedIds).filter(id => id != null);
    const excludedIds = ([] as any[]).concat(this.authService.excludedIds).filter(id => id != null);

    this.appointmentService.find(includedIds, excludedIds).subscribe(result => {
      this.appointmentGroups = Object.entries(_.groupBy(result._embedded.appointments, appointment => {
        const appointmentDate = new Date(appointment.start);
        appointmentDate.setHours(0, 0, 0, 0);
        return appointmentDate;
      }));
    });
  }

  constructor(private authService: AuthService, private appointmentService: AppointmentService) {
  }
}
