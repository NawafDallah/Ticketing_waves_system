import { Client } from './client';
import { Employee } from './employee';
import { Ticket } from './ticket';

export class Manager {
  id?: String;
  name?: String;
  userName?: String;
  email?: String;
  mobile?: String;
  birthDate?: String;
  address?: String;
  arrEmployee?: Employee[];
  arrClient?: Client[];
  arrTicket?: Ticket[];
  nbEmployee?: number;
  nbClient?: number;
  nbTicket?: number;

  constructor(
    id: String,
    name: String,
    userName: String,
    email: String,
    mobile: String,
    birthDate: String,
    address: String
  ) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.mobile = mobile;
    this.birthDate = birthDate;
    this.address = address;
    this.arrEmployee = []
    this.arrClient = [];
    this.arrTicket = [];
    this.nbEmployee = 0;
    this.nbClient = 0;
    this.nbTicket = 0;  
  }
}
