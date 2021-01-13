import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-true-reactive-form',
  templateUrl: './true-reactive-form.component.html',
  styleUrls: ['./true-reactive-form.component.scss']
})
export class TrueReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  loadData() {
    this.registrationForm.setValue({
      userName: 'user',
      password: 'abc',
      confirmPassword: 'abc'
    });
  }
}
