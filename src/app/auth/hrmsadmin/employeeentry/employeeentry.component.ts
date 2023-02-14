import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeeentry',
  templateUrl: './employeeentry.component.html',
  styleUrls: ['./employeeentry.component.scss']
})
export class EmployeeentryComponent implements OnInit 
{
  public employeeentryform: FormGroup ;
  public currentUser: any;
  public today = new Date();
  minDate = new Date(1950, 0, 1);
  file: any = File;
  public imagepreviewing1: any;  public filename: any;
  constructor(private fb: FormBuilder) { this.employeeentryform = this.fb.group({
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    initial: ['', Validators.required],
    dob: ['', Validators.required],
    pincode: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    category: ['', Validators.required],
    profilepic: ['', Validators.required],
    department: ['', Validators.required],
    designation: ['', Validators.required],
    degree: ['', Validators.required],
    doj: ['', Validators.required],
    pplace: ['', Validators.required],
    number: ['', Validators.required],
    email: ['', Validators.required],
    employeetype: ['', Validators.required],
  });}

  ngOnInit(): void 
  {
    this.currentUser = 1;
    
  }

  onFileChange(event: any) 
  {
    if (event.target.files.length > 0) 
    {

      this.file = <File>event.target.files[0];
      if ((this.file.type == 'image/jpeg' || this.file.type == 'image/png') && this.file.size <= 300000) 
      {              
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => 
        {
          this.imagepreviewing1 = event.target.result;
        }
      }
      else 
      {
        Swal.fire('Please enter 300 K.B jpeg file only');
        event.target.value = null;
        this.imagepreviewing1 = null;
      }
    }
  }

}
