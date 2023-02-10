import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmententryComponent } from './departmententry/departmententry.component';
import { DesignationentryComponent } from './designationentry/designationentry.component';
import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employeeentry', component: EmployeeentryComponent },
  { path: 'departmententry', component: DepartmententryComponent },
  { path: 'designationentry', component: DesignationentryComponent },
  { path: 'manageemployee', component: ManageemployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsadminRoutingModule { }
