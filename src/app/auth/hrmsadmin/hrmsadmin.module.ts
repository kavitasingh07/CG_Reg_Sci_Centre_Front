import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmsadminRoutingModule } from './hrmsadmin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { MaterialModule } from 'src/app/material-module';
import { DepartmententryComponent } from './departmententry/departmententry.component';
import { DesignationentryComponent } from './designationentry/designationentry.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeentryComponent,
    DepartmententryComponent,
    DesignationentryComponent,
    ManageemployeeComponent
  ],
  imports: [
    CommonModule,
    HrmsadminRoutingModule,
    MaterialModule
  ]
})
export class HrmsadminModule { }
