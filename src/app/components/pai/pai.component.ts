import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss'],
})
export class PaiComponent implements OnInit, AfterViewInit {
  textOne =
    'Lorem ipsum dolor sit amet. Qui atque nihil aut corrupti consequatur aut velit earum hic autem eius qui tempora incidunt est fugiat nisi. Sed accusamus consequatur eos earum omnis eos quisquam mollitia qui exercitationem ratione sed molestias quisquam aut iusto facilis';

  textTwo = 'Fuctura Aula 3 - 23/04';
  login: Login = {};
  constructor() {}

  ngOnInit(): void {
    this.changeTextOne();
    console.log(this.textOne);
    console.log('NgInit');
  }

  ngAfterViewInit(): void {
    this.changeTextOneAfter();
    console.log('AfterView');
    console.log(this.textOne);
  }

  changeTextOne() {
    this.textOne = 'ok';
  }
  changeTextOneAfter() {
    this.textOne = 'aa';
  }

  submit() {
    console.log(this.login);
  }
}
