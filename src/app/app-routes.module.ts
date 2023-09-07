import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './View/screen/sign-in/sign-in.component';
import { SignUpComponent } from './View/screen/sign-up/sign-up.component';
import { DashboardManagerComponent } from './View/screen/managerPage/dashboard-manager/dashboard-manager.component';
import { ManagerHomeComponent } from './View/screen/managerPage/manager-home/manager-home.component';
import { ManageEmployeeComponent } from './View/screen/managerPage/manage-employee/manage-employee.component';
import { ManageClientComponent } from './View/screen/managerPage/manage-client/manage-client.component';
import { ManageTicketComponent } from './View/screen/managerPage/manage-ticket/manage-ticket.component';
import { EmployeeHomeComponent } from './View/screen/EmployeePage/employee-home/employee-home.component';
import { ClientHomeComponent } from './View/screen/ClientPage/client-home/client-home.component';
import { EmployeeTableComponent } from './View/screen/EmployeePage/employee-table/employee-table.component';
import { ClientTableComponent } from './View/screen/ClientPage/client-table/client-table.component';
import { DashboardEmployeeComponent } from './View/screen/EmployeePage/dashboard-employee/dashboard-employee.component';
import { DashboardClientComponent } from './View/screen/ClientPage/dashboard-client/dashboard-client.component';
import { NavigationComponent } from './testScreen/navigation/navigation.component';
import { EmployeeCommentComponent } from './View/screen/EmployeePage/employee-comment/employee-comment.component';
import { ClientCommentComponent } from './View/screen/ClientPage/client-comment/client-comment.component';



const appRoutes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'managerHome',
    component: ManagerHomeComponent,
    children: [
      { path: '', component: DashboardManagerComponent },
      { path: 'dashboard', component: DashboardManagerComponent },
      { path: 'manageEmployee', component: ManageEmployeeComponent },
      { path: 'manageClient', component: ManageClientComponent },
      { path: 'manageTicket', component: ManageTicketComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'employeeHome',
    component: EmployeeHomeComponent,
    children: [
      { path: '', component: DashboardEmployeeComponent },
      { path: 'employeeTickets', component: EmployeeTableComponent },
      { path: 'employeeDashBoard', component: DashboardEmployeeComponent },
      { path: 'employeeComment', component: EmployeeCommentComponent },
      { path: '**', redirectTo: 'employeeTickets', pathMatch: 'full' },
    ],
  },
  {
    path: 'clientHome',
    component: ClientHomeComponent,
    children: [
      { path: '', component: DashboardClientComponent },
      { path: 'clientTicket', component: ClientTableComponent },
      { path: 'clientDashboard', component: DashboardClientComponent },
      { path: 'clientComment', component: ClientCommentComponent },
      { path: '**', redirectTo: 'clietTickets', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
