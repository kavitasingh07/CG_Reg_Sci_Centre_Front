import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectdirectorRoutingModule } from './projectdirector-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectdirectorRoutingModule
  ]
})
export class ProjectdirectorModule { }
