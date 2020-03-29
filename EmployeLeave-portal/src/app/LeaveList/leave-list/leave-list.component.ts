import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  readonly rootUrl:'https://localhost:44385/api';
  result:any;
  leaveList: [];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
   
    this.httpService.get<any>('https://localhost:44385/api/vLeaves').subscribe(res=>{
      this.result=res;
      console.log(this.result);
      this.leaveList=this.result;
    })
   
  }
 

}
