import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  public Issue: any;
  public output:any;
  public data:any;
  
  constructor(private sample:SampleService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder) { 
    this.Issue = this.fb.group({
      'title' : ['',[Validators.required]],
      'description' : ['',[Validators.required]]
      
    })
  }

    reactiveForm  = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl()
    })

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
     
      this.data = JSON.parse(params.data);
      this.Issue = this.data;
      console.log(this.data);
    })
    this.reactiveForm.setValue(this.data);
  }

  update(){
    this.output = this.reactiveForm.value;
    console.log(this.output);
    this.sample.updateIssue(this.output).subscribe((data: any)=>{
    console.log(data);
    if(data==1){ 
    this.router.navigateByUrl('/create');
    }
      
    });
  }

}
