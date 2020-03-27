import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeeService } from './Employee.Service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './employeAdd.component.html',
 // styleUrls: ['./employeeAdd.component.css']
})
export class EmployeeAddComponent implements OnInit {
    employeFormGroup:FormGroup;
    employeee=[];
    submitted = false;
  constructor(private httpService: HttpClient,private formBuilder:FormBuilder,private service:EmployeeService) { }

  
  ngOnInit() {
    this.resetForm();
    this.employeFormGroup=this.formBuilder.group({
        employeName:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
    });
    
   
  }
  resetForm(employeFormGroup?:FormGroup){
      
      this.service.formData={
          EmployeId:0,
          EmployeName:''
      }
  }
  get registerFormControl() {
    return this.employeFormGroup.controls;
  }
addEmployee(){
   this.service.postEmployeDetail().subscribe(res=>{
       this.resetForm(this.employeFormGroup)
       this.service.refreshList();
   },err=>{console.log(err);})
}
}




// this.httpService.post('https://localhost:44385/api/Employees', JSON.stringify({
//     employeName:this.employeFormGroup.value
  
//   })).subscribe(  
//     data => {  
//      this.employeee = data as  [];  
//     }  
//   ); 
//   if(this.employeFormGroup.value != null){
//    // alert("successfully added employe");
//     console.log(this.employeee);
//     console.log(this.employeFormGroup.value);
//   }
 
