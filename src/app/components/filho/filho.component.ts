import { Component, Input, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent implements OnInit {
  @Input()
  textTwo = '';

  @Input()
  login: Login = {};

  constructor() {}

  ngOnInit(): void {}
}
