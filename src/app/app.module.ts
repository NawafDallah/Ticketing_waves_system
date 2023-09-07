import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { SignInComponent } from './View/screen/sign-in/sign-in.component';
import { SignUpComponent } from './View/screen/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ClientService } from './controller/service/client.service';
import { EmployeeService } from './controller/service/employee.service';
import { ManagerService } from './controller/service/manager.service';
import { AppRoutingModule } from './app-routes.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './testScreen/dashboard/dashboard.component';
import { NavigationComponent } from './testScreen/navigation/navigation.component';
import { TestViewComponent } from './testScreen/test-view/test-view.component';
import { ManagerHomeModule } from './View/screen/managerPage/manager-home/manager-home.module';
import { ClientHomeModule } from './View/screen/ClientPage/client-home/client-home.module';
import { EmployeeHomeModule } from './View/screen/EmployeePage/employee-home/employee-home.module';
import { TicketService } from './controller/service/ticket.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './controller/service/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentFormComponent } from './View/component/forms/comment-form/comment-form.component';
import { CommentClientComponent } from './View/component/forms/comment-client/comment-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    TestViewComponent,
    NavigationComponent,
    DashboardComponent,
    CommentFormComponent,
    CommentClientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerHomeModule,
    EmployeeHomeModule,
    ClientHomeModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    ClientService,
    EmployeeService,
    ManagerService,
    TicketService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
