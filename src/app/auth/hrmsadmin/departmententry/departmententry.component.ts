import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective  } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departmententry',
  templateUrl: './departmententry.component.html',
  styleUrls: ['./departmententry.component.scss']
})
export class DepartmententryComponent implements OnInit {

  public departmententryform: FormGroup ;
  constructor(private fb: FormBuilder) { this.departmententryform = this.fb.group({
    departmentname: ['', Validators.required],
  }
  )};

  ngOnInit(): void {
  }

}
