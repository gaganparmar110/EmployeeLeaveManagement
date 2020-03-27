import { EmployeeLeave } from '../Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {
  formData: EmployeeLeave;
  readonly rootURL = 'https://localhost:44385/api';
  list : EmployeeLeave[];

  constructor(private http: HttpClient) { }

  postEmployeeLeaves() {
    return this.http.post(this.rootURL + '/EmployeeLeaves', this.formData);
  }
  putEmployeeLeaves() {
   // return this.http.put(this.rootURL + '/EmployeeLeaves/'+ this.formData.PMId, this.formData);
  }
  deleteEmployeeLeaves(id) {
    //return this.http.delete(this.rootURL + '/EmployeeLeaves/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/EmployeeLeaves')
    .toPromise()
    .then(res => this.list = res as EmployeeLeave[]);
  }
}
