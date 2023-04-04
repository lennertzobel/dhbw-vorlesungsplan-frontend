export class Course {
  public id: string;
  public name: string;
  public urlEncodedName: string;

  constructor(id: string, name: string, urlEncodedName: string) {
    this.id = id;
    this.name = name;
    this.urlEncodedName = urlEncodedName;
  }
}
