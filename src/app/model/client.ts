import { Ticket } from "./ticket";


export class Client {
  id?: String;
  name?: String;
  userName?: String;
  email?: String;
  phoneNumber?: String;
  dateOfBirth?: String;
  active?: boolean;
  address?: String;
  ticket?: Ticket[];
  nbTickets?: number;

  constructor(
    id: String,
    name: String,
    userName: String,
    email: String,
    mobile: String,
    dateOfBirth: String,
    active: boolean,
    address: String
  ) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.phoneNumber = mobile;
    this.dateOfBirth = dateOfBirth;
    this.active = active;
    this.address = address;
    this.ticket = [];
    this.nbTickets = this.ticket.length;
  }
}