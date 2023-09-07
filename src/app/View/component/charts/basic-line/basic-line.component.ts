import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ClientService } from 'src/app/controller/service/client.service';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { ManagerService } from 'src/app/controller/service/manager.service';

interface DashboardData {
  newTicketCount: number;
  openTicketCount: number;
  closedTicketCount: number;
}
@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.css'],
})
export class BasicLineComponent implements OnInit {
  // userInfo = JSON.parse(localStorage.getItem('userInfo')!);
  // userId = this.userInfo.id;
  // userType = this.userInfo.userType;
  public dashBoardInfo: any;
  chartOptions: {} | undefined;
  @Input() data: any = [];
  dashBoard: DashboardData = {
    newTicketCount: 0,
    openTicketCount: 0,
    closedTicketCount: 0,
  };
  newTicketCount: number = 0;
  closedTicketCount: number = 0;
  openTicketCount: number = 0;

  Highcharts = Highcharts;

  // dashBoardManager() {
  //   this.managerService.dashBoardManager().subscribe(
  //     (response: any) => {
  //       this.dashBoard = response;
  //       this.dashBoardInfo = this.dashBoard;
  //       console.log('DashBoard response: ', response);
  //       console.log('DashBoard : ', this.dashBoard);
  //       this.chartOptions = {
  //         chart: {
  //           plotBackgroundColor: null,
  //           plotBorderWidth: null,
  //           plotShadow: false,
  //           type: 'pie',
  //         },
  //         title: {
  //           text: `New: ${this.dashBoard.newTicketCount}<br><br>Open: ${this.dashBoard.openTicketCount}<br><br>Closed: ${this.dashBoard.closedTicketCount}`,
  //           align: 'left',
  //         },
  //         tooltip: {
  //           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  //         },
  //         accessibility: {
  //           point: {
  //             valueSuffix: '%',
  //           },
  //         },
  //         plotOptions: {
  //           pie: {
  //             allowPointSelect: true,
  //             cursor: 'pointer',
  //             dataLabels: {
  //               enabled: true,
  //               format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //             },
  //           },
  //         },
  //         series: [
  //           {
  //             name: 'Tickets',
  //             colorByPoint: true,
  //             data: [
  //               {
  //                 name: 'Open',
  //                 y: this.dashBoard.openTicketCount,
  //                 sliced: true,
  //                 selected: true,
  //               },
  //               {
  //                 name: 'Closed',
  //                 y: this.dashBoard.closedTicketCount,
  //               },
  //               {
  //                 name: 'New',
  //                 y: this.dashBoard.newTicketCount,
  //               },
  //             ],
  //           },
  //         ],
  //       };
  //       HC_exporting(Highcharts);
  //       setTimeout(() => {
  //         window.dispatchEvent(new Event('resize'));
  //       }, 300);
  //     },
  //     (error) => {
  //       console.log('DashBoard manager: ', error);
  //     },
  //     () => {}
  //   );
  // }

  // dashBoardEmployee() {
  //   this.emplyeeService.dashBoardEmployee().subscribe(
  //     (response: any) => {
  //       this.dashBoard = response;
  //       this.dashBoardInfo = this.dashBoard;
  //       console.log('DashBoard response: ', response);
  //       console.log('DashBoard : ', this.dashBoard);
  //       this.chartOptions = {
  //         chart: {
  //           plotBackgroundColor: null,
  //           plotBorderWidth: null,
  //           plotShadow: false,
  //           type: 'pie',
  //         },
  //         title: {
  //           text: `Open: ${this.dashBoard.openTicketCount}<br><br>Closed: ${this.dashBoard.closedTicketCount}`,
  //           align: 'left',
  //         },
  //         tooltip: {
  //           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  //         },
  //         accessibility: {
  //           point: {
  //             valueSuffix: '%',
  //           },
  //         },
  //         plotOptions: {
  //           pie: {
  //             allowPointSelect: true,
  //             cursor: 'pointer',
  //             dataLabels: {
  //               enabled: true,
  //               format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //             },
  //           },
  //         },
  //         series: [
  //           {
  //             name: 'Tickets',
  //             colorByPoint: true,
  //             data: [
  //               {
  //                 name: 'Open',
  //                 y: this.dashBoard.openTicketCount,
  //                 sliced: true,
  //                 selected: true,
  //               },
  //               {
  //                 name: 'Closed',
  //                 y: this.dashBoard.closedTicketCount,
  //                 sliced: true,
  //                 selected: true,
  //               },
  //             ],
  //           },
  //         ],
  //       };
  //       HC_exporting(Highcharts);
  //       setTimeout(() => {
  //         window.dispatchEvent(new Event('resize'));
  //       }, 300);
  //     },
  //     (error) => {
  //       console.log('DashBoard manager: ', error);
  //     },
  //     () => {}
  //   );
  // }

  // dashBoardClient() {
  //   this.clientService.dashBoardClient().subscribe(
  //     (response: any) => {
  //       this.dashBoard = response;
  //       this.dashBoardInfo = this.dashBoard;
  //       console.log('DashBoard response: ', response);
  //       console.log('DashBoard : ', this.dashBoard);
  //       this.chartOptions = {
  //         chart: {
  //           plotBackgroundColor: null,
  //           plotBorderWidth: null,
  //           plotShadow: false,
  //           type: 'pie',
  //         },
  //         title: {
  //           text: `New: ${this.dashBoard.newTicketCount}<br><br>Open: ${this.dashBoard.openTicketCount}<br><br>Closed: ${this.dashBoard.closedTicketCount}`,
  //           align: 'left',
  //         },
  //         tooltip: {
  //           pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  //         },
  //         accessibility: {
  //           point: {
  //             valueSuffix: '%',
  //           },
  //         },
  //         plotOptions: {
  //           pie: {
  //             allowPointSelect: true,
  //             cursor: 'pointer',
  //             dataLabels: {
  //               enabled: true,
  //               format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //             },
  //           },
  //         },
  //         series: [
  //           {
  //             name: 'Tickets',
  //             colorByPoint: true,
  //             data: [
  //               {
  //                 name: 'Open',
  //                 y: this.dashBoard.openTicketCount,
  //                 sliced: true,
  //                 selected: true,
  //               },
  //               {
  //                 name: 'Closed',
  //                 y: this.dashBoard.closedTicketCount,
  //               },
  //               {
  //                 name: 'New',
  //                 y: this.dashBoard.newTicketCount,
  //               },
  //             ],
  //           },
  //         ],
  //       };
  //       HC_exporting(Highcharts);
  //       setTimeout(() => {
  //         window.dispatchEvent(new Event('resize'));
  //       }, 300);
  //     },
  //     (error) => {
  //       console.log('DashBoard manager: ', error);
  //     },
  //     () => {}
  //   );
  // }

  constructor(
    private managerService: ManagerService,
    private emplyeeService: EmployeeService,
    private clientService: ClientService
  ) {
    //if (this.userType === 'Manager'){
    //  this.dashBoardManager();
    //} else if(this.userType === 'Employee'){
    //  this.dashBoardEmployee()
   // }else {
//this.dashBoardClient();
    //}
  }

  ngOnInit() {
    console.log('inside ngOnit', this.openTicketCount!);
  }
}
