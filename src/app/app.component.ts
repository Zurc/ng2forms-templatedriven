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
  model = new Employee('coco', 'Washington', true);

  

  // firstNameToUppercase(value: string) {
  //   // check that there is a value
  //   if(value.length > 0)
  //     // convert the first character to uppercase and live the rest as it is
  //     this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
  //   else
  //     // if length is zero still assign an empty string value
  //     this.model.firstName = value;
  // }

}
