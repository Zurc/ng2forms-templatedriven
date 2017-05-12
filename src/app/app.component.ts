import { Component } from '@angular/core';
import { Employee } from "./models/employee.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 forms';

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Coco', 'Washington');

}
