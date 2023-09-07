import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardManagerComponent } from '../dashboard-manager/dashboard-manager.component';
import { ManagerHomeComponent } from './manager-home.component';
import { RouterModule } from '@angular/router';
import { ManageClientComponent } from '../manage-client/manage-client.component';
import { ManageEmployeeComponent } from '../manage-employee/manage-employee.component';
import { ManageTicketComponent } from '../manage-ticket/manage-ticket.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/View/component/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardManagerComponent,
    ManagerHomeComponent,
    ManageClientComponent,
    ManageEmployeeComponent,
    ManageTicketComponent,
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
    ReactiveFormsModule
  ],
})
export class ManagerHomeModule {}
