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
  constructor(private httpService: HttpClient,private formBuilder:FormBuilder) { }

  
  ngOnInit() {
      this.leaveFormGroup=this.formBuilder.group({
          employeeName:['',Validators.required],
          leaveStartDate:['',Validators.required],
          leaveEndDate:['',Validators.required]
      })

  }
  applyLeave(){
    
    this.httpService.post('https://localhost:44308/api/employeeleave', JSON.stringify({
    EmployeName:this.leaveFormGroup.controls.employeeName.value,    
    LeaveStartDate:this.leaveFormGroup.controls.leaveStartDate.value,
    LeaveEndDate:this.leaveFormGroup.controls.LeaveEndDate.value,   
      
      })).subscribe(  
        data => {  
         this.leave = data as  [];  
        }  
      ); 
      if(this.leaveFormGroup.value != null){
        alert("successfully apply leave!!");
        console.log(this.leave);
        console.log(this.leaveFormGroup.value);
      }
  }
}