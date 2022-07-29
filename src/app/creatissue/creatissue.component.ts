import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-creatissue',
  templateUrl: './creatissue.component.html',
  styleUrls: ['./creatissue.component.css']
})
export class CreatissueComponent implements OnInit {
  public tableData: any;
  public deleteEmployeedata:any;

  constructor(private sample:SampleService,private router: Router) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.sample.getIssue().subscribe((data: any)=>{    
      this.tableData=data;
      console.log(this.tableData);
          }
          );
  }
  edit(data:any){
    this.router.navigate(
      ['/editpage'],
      { queryParams: { data: JSON.stringify(data) } }
    )
  }
  deleteData(val:any){
    console.log(val);
    this.sample.deleteEmployeedata({'id':val}).subscribe((data: any)=>{   
            this.getdata();
     });
    }
  

}
