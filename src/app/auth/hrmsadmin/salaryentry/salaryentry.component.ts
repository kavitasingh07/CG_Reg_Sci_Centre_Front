import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salaryentry',
  templateUrl: './salaryentry.component.html',
  styleUrls: ['./salaryentry.component.scss']
})
export class SalaryentryComponent implements OnInit 
{
  public salaryentryform: FormGroup ;

  constructor(private fb: FormBuilder) { this.salaryentryform = this.fb.group({
    empid: ['', Validators.required],
    panno:['', Validators.required],
    basicgp:['', Validators.required],
    travelallownace:['', Validators.required],
    HRA:['', Validators.required],
    ConveyanceAllowance:['', Validators.required],
  });}

  ngOnInit(): void {
  }

}
