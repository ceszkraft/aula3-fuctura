import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  employees: Employee[] = [];
  @Input()
  employee: Employee = {};
  constructor(private service: EmployeeService) {}

  ngOnInit(): void {}

  delete(id: number | string) {
    this.service.delete(id).subscribe((res) => {
      console.log(res);
    });
  }

  setUser(name?: string, email?: string, id?: number) {
    this.employee.first_name = name;
    this.employee.email = email;
    this.employee.id = id || 0;
  }
}
