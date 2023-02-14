import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component : LoginComponent
  }, 
  {
    path: '',
    component: AuthComponent,
    canActivate: [],
    children: [
      {path: 'hrmsadmin', loadChildren:()=>import('./auth/hrmsadmin/hrmsadmin.module').then(m => m.HrmsadminModule)} ,
      {path: 'employee', loadChildren:()=>import('./auth/employee/employee.module').then(m => m.EmployeeModule)} ,
      {path: 'dgadmin', loadChildren:()=>import('./auth/dgadmin/dgadmin.module').then(m => m.DgadminModule)} ,
      {path: 'projectdirector', loadChildren:()=>import('./auth/projectdirector/projectdirector.module').then(m => m.ProjectdirectorModule)} ,
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
