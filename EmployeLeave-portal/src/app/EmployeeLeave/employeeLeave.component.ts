import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeeLeaveService } from './EmployeeLeave.Service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './employeeLeave.component.html',
 // styleUrls: ['./employeeLeave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
    leaveFormGroup:FormGroup;
    leave=[];
  constructor(private httpService: HttpClient,private formBuilder:FormBuilder,private service:EmployeeLeaveService) { }

  
  ngOnInit() {
    this.resetForm();
      this.leaveFormGroup=this.formBuilder.group({
          employeeName:['',Validators.required],
          leaveStartDate:['',Validators.required],
          leaveEndDate:['',Validators.required]
      })

  }
  resetForm(leaveFormGroup?:FormGroup){
    this.service.formData={
      EmployeeLeaveId:0,
      LeaveStartDate:"",
      LeaveEndDate:"",
      EmployeId:0
  }
  }
  applyLeave(){
    this.service.postEmployeeLeaves().subscribe(res=>{
      this.resetForm(this.leaveFormGroup)
      this.service.refreshList();
  },err=>{console.log(err);})
   
  }
}