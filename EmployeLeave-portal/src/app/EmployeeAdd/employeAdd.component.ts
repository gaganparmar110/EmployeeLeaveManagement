import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import{FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employeAdd.component.html',
 // styleUrls: ['./employeeAdd.component.css']
})
export class EmployeeAddComponent implements OnInit {
    employeFormGroup:FormGroup;
    employee=[];
    submitted = false;
    result:any;
    readonly rootURL = 'https://localhost:44385/api';
  constructor(private httpService: HttpClient,private formBuilder:FormBuilder) { }

  
  ngOnInit() {
 
    this.employeFormGroup=this.formBuilder.group({
        employeName:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
    });
    
   
  }


  get registerFormControl() {
    
    return this.employeFormGroup.controls;
  }

addEmployee(){
  this.httpService.post(this.rootURL+'/Employees',{employeName:this.employeFormGroup.controls.employeName.value}).subscribe(res=>{
    this.result=res;
    console.log(this.result);
  });

}
}




