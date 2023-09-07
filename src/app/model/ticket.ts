import { Client } from './client';
import { Employee } from './employee';
import { Product } from './product';

export class Ticket {
  id?: String;
  description?: String;
  comments?: String;
  title?: String;
  file?: String;
  status?: number;
  employeeName?: Employee;
  clientName?: Client;
  clientId?: String;
  arrProduct?: Product[];

  constructor(
    id: String,
    product: String,
    description: String,
    title: String,
    file: String,
    status: number,
    clientName: Client
  ) {
    this.id = id;
    this.description = description;
    this.title = title;
    this.file = file;
    this.status = status;
    this.employeeName = undefined;
    this.clientName = clientName;
  }
}
