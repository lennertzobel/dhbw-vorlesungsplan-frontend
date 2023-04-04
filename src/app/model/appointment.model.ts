export class Appointment {
  public id: string;
  public name: string;
  public start: Date;
  public end: Date;

  constructor(id: string, name: string, start: Date, end: Date) {
    this.id = id;
    this.name = name;
    this.start = start;
    this.end = end;
  }
}
