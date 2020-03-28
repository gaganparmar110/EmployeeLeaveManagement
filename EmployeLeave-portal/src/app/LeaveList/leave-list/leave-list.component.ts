import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LeaveListService } from '../LeaveList.Service';
import { EmployeeLeaveService } from '../../EmployeeLeave/EmployeeLeave.Service';
import { EmployeeService } from 'src/app/EmployeeAdd/Employee.Service';
@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  constructor(private httpService: HttpClient,public service:EmployeeLeaveService,public serviceName:EmployeeService) { }

  ngOnInit(): void {
    this.serviceName.refreshList();
  this.service.refreshList();
  }
 

}
