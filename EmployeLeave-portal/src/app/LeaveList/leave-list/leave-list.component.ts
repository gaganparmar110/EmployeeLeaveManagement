import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LeaveListService } from '../LeaveList.Service';
import { EmployeeLeaveService } from '../../EmployeeLeave/EmployeeLeave.Service';
@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  constructor(private httpService: HttpClient,private service:EmployeeLeaveService) { }

  ngOnInit(): void {
  this.service.refreshList();
  }
 

}
