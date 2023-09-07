import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { BasicLineComponent } from './charts/basic-line/basic-line.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MatListModule } from '@angular/material/list'; 
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedTableComponent } from './tables/shared-table/shared-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmployeeFormComponent } from './forms/employee-form/employee-form.component';
import { CreateTicketFormComponent } from './forms/create-ticket-form/create-ticket-form.component';
import { TicketFormComponent } from './forms/ticket-form/ticket-form.component';
import { ViewTickeFormComponent } from './forms/view-ticke-form/view-ticke-form.component';
import { MatSelectModule } from '@angular/material/select';
import { AssignFormComponent } from './forms/assign-form/assign-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BasicLineComponent,
    SharedTableComponent,
    EmployeeFormComponent,
    TicketFormComponent,
    CreateTicketFormComponent,
    ViewTickeFormComponent,
    AssignFormComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    MatListModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BasicLineComponent, 
    SharedTableComponent,
    EmployeeFormComponent,
    TicketFormComponent,
    CreateTicketFormComponent,
    ViewTickeFormComponent,
    AssignFormComponent,
  ],
})
export class SharedModule {}
 