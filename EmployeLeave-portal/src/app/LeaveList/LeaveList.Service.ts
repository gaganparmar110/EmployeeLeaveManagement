import { LeaveList } from '../Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LeaveListService {
  formData: LeaveList;
  readonly rootURL = 'https://localhost:44385/api';
  list : LeaveList[];

  constructor(private http: HttpClient) { }

  postLeaves() {
    return this.http.post(this.rootURL + '/vLeaves', this.formData);
  }
  putLeaves() {
   // return this.http.put(this.rootURL + '/vLeaves/'+ this.formData.PMId, this.formData);
  }
  deleteLeaves(id) {
    //return this.http.delete(this.rootURL + '/vLeaves/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/vLeaves')
    .toPromise()
    .then(res => this.list = res as LeaveList[]);
  }
}
