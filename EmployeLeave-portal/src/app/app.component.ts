import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeLeave-portal';
constructor(private router:Router){}
employeAdd(){
     this.router.navigate(['/employeeAdd']);
  }
}
