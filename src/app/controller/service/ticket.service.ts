import { Injectable } from '@angular/core';
import { Client } from 'src/app/model/client';
import { Product } from 'src/app/model/product';
import { Ticket } from 'src/app/model/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  ticket: Ticket;
  products?: Product[] = this.getTicket()?.arrProduct!;
  constructor() {
    this.ticket = new Ticket('', '', '', '', '', 0, null);
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
    // this.managerInitialized = true;
  }

  getTicket() {
    return this.ticket;
  }

  getProduct() {
    return (this.products = [
      { id: 1, name: 'availo' },
      { id: 2, name: 'oli5' },
      { id: 3, name: 'rich' },
      { id: 4, name: 'massagat' },
    ]);
  }
}
