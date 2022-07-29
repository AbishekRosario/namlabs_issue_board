import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {

   }
   getIssue(){
    return this.http.get('http://localhost/libraryjson/getemp.php');
  }
  addIssue(val :any){
    return this.http.post('http://localhost/libraryjson/addemp.php', val);
  }
  updateIssue(val:any){
    return this.http.post('http://localhost/libraryjson/updateemp.php', val);
  }
  deleteEmployeedata(val:any){
    return this.http.post('http://localhost/libraryjson/deletemp.php', val);
  }
   
  
}
