import {Component} from '@angular/core';

interface Gender {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
}