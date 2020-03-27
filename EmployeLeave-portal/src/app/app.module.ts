import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeAddComponent} from './EmployeeAdd/employeAdd.component';
import {EmployeeLeaveComponent} from './EmployeeLeave/employeeLeave.component';
import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LeaveListComponent } from './LeaveList/leave-list/leave-list.component';
import {EmployeeService} from './EmployeeAdd/Employee.Service';

@NgModule({
  declarations: [
    AppComponent,EmployeeAddComponent,EmployeeLeaveComponent, LeaveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,APP_ROUTING,  HttpClientModule ,FormsModule,ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
