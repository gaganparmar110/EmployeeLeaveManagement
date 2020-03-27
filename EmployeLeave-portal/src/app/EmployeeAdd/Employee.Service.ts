import { Employee } from '../Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = 'https://localhost:44385/api';
  list : Employee[];

  constructor(private http: HttpClient) { }

  postEmployeDetail() {
    return this.http.post(this.rootURL + '/Employees', this.formData);
  }
  putPaymentDetail() {
   // return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    //return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Employees')
    .toPromise()
    .then(res => this.list = res as Employee[]);
  }
}
