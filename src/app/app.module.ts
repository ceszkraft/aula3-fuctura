import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { TableComponent } from './components/table/table.component';

import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [AppComponent, PaiComponent, FilhoComponent, TableComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
