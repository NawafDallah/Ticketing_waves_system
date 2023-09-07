import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../component/shared.module';
import { ClientHomeComponent } from './client-home.component';
import { ClientTableComponent } from '../client-table/client-table.component';
import { DashboardClientComponent } from '../dashboard-client/dashboard-client.component';
import { ClientCommentComponent } from '../client-comment/client-comment.component';

@NgModule({
  declarations: [
    ClientHomeComponent, 
    ClientTableComponent,
    DashboardClientComponent,
    ClientCommentComponent,
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
export class ClientHomeModule {}
