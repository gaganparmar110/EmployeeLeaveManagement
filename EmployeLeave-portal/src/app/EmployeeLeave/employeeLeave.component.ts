import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import{FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-leave-list',
  templateUrl: './employeeLeave.component.html',
 // styleUrls: ['./employeeLeave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
    leaveFormGroup:FormGroup;
    leave=[];
    result:any;
    readonly rootURL = 'https://localhost:44385/api';
  constructor(private httpService: HttpClient,private formBuilder:FormBuilder,) { }

  
  ngOnInit() {
  
      this.leaveFormGroup=this.formBuilder.group({
          employeeName:['',Validators.required],
          leaveStartDate:['',Validators.required],
          leaveEndDate:['',Validators.required]
      })
  //    console.log(this.leaveFormGroup.value);

  }
 
  applyLeave(){
    this.httpService.post(this.rootURL+'/EmployeeLeaves',{EmployeName:this.leaveFormGroup.controls.employeeName.value,LeaveStartDate:this.leaveFormGroup.controls.leaveStartDate.value,LeaveEndDate:this.leaveFormGroup.controls.leaveEndDate.value}).subscribe(res=>{
      this.result=res;
      console.log(this.result);
    })
  
   
  }
}