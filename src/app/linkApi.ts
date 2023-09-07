export class AppLink {
  private static server: String = `http://16.16.56.214:5001`;

  // ================================= Auth ========================== //
  static register: String = `${this.server}/api/account/register`;
  static login: String = `${this.server}/api/account/login`;

  // ================================= Manage Users ========================== //
  static addEmployee: String = `${this.server}/api/ManageUser/AddEmployee`;
  static editEmployee: String = `${this.server}/api/ManageUser/editEmployee?`; /*employeeId=id*/;
  static getEmployees: String = `${this.server}/api/ManageUser/GetEmployees`;
  static searchEmployee: String = `${this.server}/api/ManageUser/GetEmployees?` /*search=value*/;
  static getClients: String = `${this.server}/api/ManageUser/GetClients`;
  static searchClient: String = `${this.server}/api/ManageUser/GetClients?`; /*search=value`*/;
  static activeUser: String = `${this.server}/api/ManageUser/activateUser/` /*id */;
  static deactiveUser: String = `${this.server}/api/ManageUser/deactivateUser/` /*id */;

  // ================================= Ticket ========================== //
  static getManagerTickets: String = `${this.server}/api/ticket/getAllTickets`;
  static assignTicket: String = `${this.server}/api/ticket/assignTicket?`; /* ticketId=111&employeeId=nnn */
  static searchManagerTicket: String = `${this.server}/api/ticket/getAllTickets?` /*search=text*/;
  static creatTickets: String = `${this.server}/api/ticket/createTicket`;
  static editTickets: String = `${this.server}/api/ticket/editTicket/`; /* ticketId */
  static getClientTickets: String = `${this.server}/api/ticket/GetClientTickets/` /*clientId */;
  static searchClientTickets: String = `${this.server}/api/ticket/GetClientTickets/` /*id?search=text */;
  static getEmployeeTickets: String = `${this.server}/api/ticket/GetEmployeeTickets/`; /*employeeId */
  static searchEmployeeTickets: String = `${this.server}/api/ticket/GetEmployeeTickets/`; /*id?search=text */
  static closeTickets: String = `${this.server}/api/ticket/closeTicket?` /* ticketId=123 */;
  static TicketComments: String = `${this.server}/api/ticket/addTicketComment/`; /*ticketId*/
  static getComments: String = `${this.server}/api/ticket/getTicketComments?`; /*ticketId=123*/

  // ================================= dashboard ========================== //
  static dashBoardManager: String = `${this.server}/api/dashboard/ticketStatusCounts`;
  static dashBoardCleint: String = `${this.server}/api/dashboard/getTicketStatusCountForClient/` /*clientid*/;
  static dashBoardEmployee: String = `${this.server}/api/dashboard/getTicketStatusCountForEmployee/`;/*employeeId*/


}
