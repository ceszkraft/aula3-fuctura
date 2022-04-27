import { Component, Input, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Employee } from 'src/app/models/employees';
@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent implements OnInit {
  @Input()
  textTwo = '';

  @Input()
  employee: Employee = {};

  @Input()
  login: Login = {};

  constructor() {}

  ngOnInit(): void {}
}
