import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
leaves:string [];
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('http://localhost:52202/api/employeeleaves').subscribe(  
      data => {  
       this.leaves = data as string [];  
      }  
    );  
  }

}
