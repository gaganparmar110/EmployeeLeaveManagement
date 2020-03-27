import {Router,Route,RouterModule,PreloadAllModules,NoPreloading, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {EmployeeAddComponent} from './EmployeeAdd/employeAdd.component';
import {EmployeeLeaveComponent} from './EmployeeLeave/employeeLeave.component';
import { LeaveListComponent } from './LeaveList/leave-list/leave-list.component';
const APP_ROUTES:Routes=[
{
      path:'employeeAdd', component : EmployeeAddComponent
},
{
    path:'employeeLeave', component: EmployeeLeaveComponent
},
{
    path:'leaveList', component: LeaveListComponent
}]


export const APP_ROUTING : ModuleWithProviders=RouterModule.forRoot(APP_ROUTES,{
    preloadingStrategy:NoPreloading,
})