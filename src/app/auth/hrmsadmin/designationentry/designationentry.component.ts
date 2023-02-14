import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective  } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-designationentry',
  templateUrl: './designationentry.component.html',
  styleUrls: ['./designationentry.component.scss']
})
export class DesignationentryComponent implements OnInit {

  public designationentryform: FormGroup ;
  constructor(private fb: FormBuilder) { this.designationentryform = this.fb.group({
    departmentname: ['', Validators.required],
    designation: ['', Validators.required],
  }
  )};

  ngOnInit(): void {
  }

}
