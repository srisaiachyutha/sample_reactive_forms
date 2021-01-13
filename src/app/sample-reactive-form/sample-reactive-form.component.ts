import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrls: ['./sample-reactive-form.component.scss']
})
export class SampleReactiveFormComponent implements OnInit {
  states = ['ap', 'ts', 'kashmir', 'orissa'];
  stateHasError = true;
  userModel = new User('', 'rama@gmail.com', 7890789089, '', false, 'male');
  constructor() { }

  ngOnInit(): void {
  }

  validateState(value) {
    if (value === 'default') {
      this.stateHasError = true;
    } else {
      this.stateHasError = false;
    }
  }

}
