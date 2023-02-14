import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DgadminRoutingModule } from './dgadmin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DgadminRoutingModule
  ]
})
export class DgadminModule { }
