import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-createissuepage',
  templateUrl: './createissuepage.component.html',
  styleUrls: ['./createissuepage.component.css']
})
export class CreateissuepageComponent implements OnInit {
  public Issue: any;
  public output:any;
  constructor(public fb: FormBuilder, private sample:SampleService,private router: Router) {

    this.Issue = this.fb.group({
      'title' : ['',[Validators.required]],
      'description' : ['',[Validators.required]]
      
    })
   
   }

  ngOnInit(): void {

  }
  Add(){
    this.output = this.Issue.value;
    console.log(this.output);
    this.sample.addIssue(this.output).subscribe((data: any)=>{
    console.log(data);
    if(data==1){
      this.router.navigateByUrl('/create');
    } 
    });
  }
 

}
