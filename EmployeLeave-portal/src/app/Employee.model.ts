import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export class Employee{
    EmployeId:number;
    EmployeName:string;
}

export class EmployeeLeave{
        EmployeeLeaveId:number;
        LeaveStartDate:string;
        LeaveEndDate:string;
        EmployeId:number;

}
export class LeaveList{
        EmployeName:number;
        LeaveStartDate:string;
        LeaveEndDate:string;
        EmployeeLeaveId:number;

   
}