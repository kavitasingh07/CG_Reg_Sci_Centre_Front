import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmententryComponent } from './departmententry/departmententry.component';
import { DesignationentryComponent } from './designationentry/designationentry.component';
import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { LeavecalculationComponent } from './leavecalculation/leavecalculation.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { SalarycalculationComponent } from './salarycalculation/salarycalculation.component';
import { SalaryentryComponent } from './salaryentry/salaryentry.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employeeentry', component: EmployeeentryComponent },
  { path: 'departmententry', component: DepartmententryComponent },
  { path: 'designationentry', component: DesignationentryComponent },
  { path: 'manageemployee', component: ManageemployeeComponent },
  { path: 'salaryentry', component: SalaryentryComponent },
  { path: 'salarycalculation', component: SalarycalculationComponent },
  { path: 'leavecalculation', component: LeavecalculationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsadminRoutingModule { 
  
}
