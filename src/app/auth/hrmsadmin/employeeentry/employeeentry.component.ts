import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective  } from '@angular/forms';

@Component({
  selector: 'app-employeeentry',
  templateUrl: './employeeentry.component.html',
  styleUrls: ['./employeeentry.component.scss']
})
export class EmployeeentryComponent implements OnInit 
{
  public employeeentryform: FormGroup | undefined;
  public currentUser: any;
  public today = new Date();
  minDate = new Date(1950, 0, 1);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void 
  {
    this.currentUser = 1;
    this.employeeentryform = this.fb.group({
    });
  }

}
