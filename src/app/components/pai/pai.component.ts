import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
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
  employees: Employee[] = [];
  employee: Employee = {
    id: 0,
    first_name: '',
    last_name: '',
    email: 'kihi',
    phone: '',
    organization: '',
    designation: '',
    salary: 0,
    status: 1,
    is_deleted: 0,
    created_at: '2019-11-19T06:30:30.000Z',
    updated_at: '2022-04-21T17:32:19.000Z',
  };
  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.changeTextOne();
    console.log(this.textOne);
    console.log('NgInit');
    this.getEmployees();
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
    this.service.postEmployee(this.employee).subscribe((res: any) => {
      console.log(res);
      console.log('message', res.message);
      this.getEmployees();
    });
  }

  update() {
    this.service.put(this.employee).subscribe((res: any) => {
      console.log(res);
      console.log('message', res.message);
      this.getEmployees();
    });
  }

  getEmployees() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log('name', typeof data[1].first_name);
      console.log(this.employees);
    });
  }
}
