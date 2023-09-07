import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { DashboardEmployeeComponent } from '../dashboard-employee/dashboard-employee.component';
import { EmployeeHomeComponent } from './employee-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../component/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EmployeeCommentComponent } from '../employee-comment/employee-comment.component';

@NgModule({
  declarations: [
    EmployeeHomeComponent,
    EmployeeTableComponent,
    DashboardEmployeeComponent,
    EmployeeCommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
})
export class EmployeeHomeModule {}
